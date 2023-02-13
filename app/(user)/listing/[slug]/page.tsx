import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/urlFor";
import { groq } from "next-sanity";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { cache, use } from "react";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";
import { Listing } from "@/typings";

type Props = {
  params: {
    slug: string;
  };
};
const Listing = ({ params: { slug } }: Props) => {
  const query = groq`
    *[_type == 'listing' && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->
    }
    `;

  const getData = cache(async () => {
    const listing: Listing = await client.fetch(query, { slug });
    return listing;
  });

  const data = use(getData());
  // const listing: Listing = await client.fetch(query, { slug })
  // console.log(listing);

  return (
      <article className="px-10 pb-28 mt-5">
        <section className="space-y-2 border-[#F7AB0A] text-white">
          <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
            <div className="absolute top-0 w-full h-full opacity-30 blur-sm p-10">
              <Image
                className="object-cover object-left lg:object-center"
                src={urlFor(data.mainImage).url()}
                alt={data.author.name}
                fill
              />
            </div>

            <section className="p-5 bg-darker-white text-primary-black w-full">
              <div className="flex flex-col md:flex-row justify-between gap-y-5 ">
                <div>
                  <h1 className="text-4xl font-extrabold">{data.title}</h1>
                  <p className="">
                    {new Date(data._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Image
                    className="rounded-full"
                    src={urlFor(data.author.image).url()}
                    alt={data.author.name}
                    height={40}
                    width={40}
                  />

                  <div className="w-64">
                    <h3 className="text-lg font-bold">{data.author.name}</h3>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="italic pt-10 text-primary-black">{data.description}</h2>
                <div className="flex items-center justify-end mt-auto space-x-2">

                <div>
                    {data.categories.map(( category) => (
                        <div key={category._id} > 
                            <p>
                                {category.title}
                            </p>
                        </div>
                    ))}
                    </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <div className="w-full flex items-center justify-center mt-6">
          <Image
            className="object-cover object-left lg:object-center rounded-[10px] "
            src={urlFor(data.mainImage).url()}
            alt={data.author.name}
            width={1000}
            height={1000}
            priority
          />
        </div>     
        <div className="text-left mt-16 flex items-center justify-center flex-col">
        <PortableText value={data.body} components={RichTextComponents}/>
        </div>        
      </article>
  );
};

export default Listing;