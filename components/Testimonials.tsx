"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "@/utils/motion";
import Image from "next/image";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { urlFor } from '@/lib/urlFor'
import { SliderData } from './../lib/sliderData';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])

  const query = groq`
  *[_type == 'testimonials']
`;

const fetchData = async () => {
  const data = await client.fetch(query);
  setTestimonials(data)

};
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <motion.div
      variants={staggerContainer} 
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25}}   
    >
    <motion.div 
    variants={fadeIn('up', 'tween', 0.35, 0.85)}
    className="relative w-full flex flex-col items-center justify-center md:min-h-[70vh] h-screen ">
      <h2 className="text-white text-2xl md:py-12 py-6 px-12 md:px-6">
        What people say about us
      </h2>
      <div className="flex flex-row lg:mx-12 items-center justify-center md:items-start md:justify-center w-full">
        <div className="hidden md:flex items-end justify-end">
          <div className="relative w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] flex items-center justify-center object-center">
            <Image
              src="./testimonials1.svg"
              alt="testimonial picture"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        {/* with w-full content shows up but messes up the bigger screen sizes
         */}
        <div className="lg:w-[540px] sm:w-[340px] w-full object-contain">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation={{
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
            loop={true}
            observer={true}
            observeParents={true}
            parallax={true}
            autoplay={{ delay: 6000 }}
    >
            {testimonials.map((testimonial: any, index: number) => (
              <SwiperSlide key={testimonial._d + index}>
                <div className="swiper-slide" key={testimonial._id + index}>
                  <div className="relative w-full h-[540px] lg:h-[480px] max-[320px]:h-[580px] max-[425px]:h-[520px] flex items-start justify-start">
                    <motion.div
                      variants={fadeIn("left", "tween", 0.2, 1)}
                      initial="hidden"
                      whileInView="show"
                      className="p-4 object-contain"
                    >
                      <div className="lg:flex lg:flex-col items-start lg:py-4 py-8 justify-center top-0">
                        <div className="relative text-gray-200 text-lg white-space overflow-hidden">
                          <Image
                            src="/quotes.svg"
                            alt="quotes"
                            width={30}
                            height={30}
                            priority
                          />
                          {testimonial.feedback}
                        </div>
                      </div>
                        <div className="flex flex-row bottom-0 relative">
                          {/* <Image src={testimonial.imgUrl} alt={testimonial.title} width={50} height={50} priority className="object-contain rounded-full" /> */}
                          <Image src={urlFor(testimonial.imgUrl).url()} alt={testimonial.title} width={50} height={50} priority className="object-contain rounded-full" />
                        <h1 className="text-xl text-extrabold mx-6 flex items-center justify-center">{testimonial.name}</h1>
                        </div>
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
                <div className="absolute  bottom-0 right-10 lg:right-0 text-white select-none gap-1  flex-row items-start justify-start mt-32 flex">
                  <BiLeftArrowAlt
                    size={20}
                    className="z-[2] image-swiper-button-prev cursor-pointer p-1 w-[40px] h-[40px] bg-[#F7AB0A] hover:bg-white hover:text-[#F7AB0A] transition-all ease-in-out duration-500"
                  />
                  <BiRightArrowAlt
                    size={20}
                    className="z-[2] image-swiper-button-next cursor-pointer w-[40px] p-1 h-[40px] bg-[#F7AB0A]  hover:bg-white hover:text-[#F7AB0A] transition-all ease-in-out duration-500"
                  />
                </div>
          </Swiper>
        </div>
      </div>
    </motion.div>
    </motion.div>
  );
};

export default Testimonials;
