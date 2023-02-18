// 'use client';

import "../styles/globals.css";
import { Montserrat } from "@next/font/google";
import { Navbar, Footer } from "@/components";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <body className={`${montserrat.className} bg-[#121a34] text-white overflow-x-hidden`}>
        <Navbar />
        {children}
         {/* @ts-expect-error Server Component */}
        <Footer />
      </body>
    </html>
  );
}