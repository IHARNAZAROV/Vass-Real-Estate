"use client";

import Image from "next/image";
import styles from "@/styles";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, textVariant } from "@/utils/motion";


const Hero = () => {

    return (
        <>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={` min-h-[60vh] w-full relative max-[425px]:mt-12`}
            >
                <motion.div
                    variants={slideIn('left', 'tween', 0.3, 0.85)}
                    className="w-full relative"
                >
                    <div className="w-full absolute z-0 -top-[50px] max-[768px]:top-[30px] max-[1440px]:top-[10px] 
          min-[1440px]:top-[10px] bg-[#0086bb]/20 h-[460px] md:h-[550px] max-[768px]:rounded-br-[160px] rounded-br-[360px]" />

                </motion.div>
                <motion.div
                    className={`${styles.xPaddings} items-center flex justify-center flex-col lg:flex-row relative z-[30]`}
                >

                    <motion.div variants={fadeIn("left", "tween", 0.2, 0.5)}>
                        <motion.div
                            className="flex flex-col relative z-10 items-left justify-left max-[425px]:mt-12 mt-0 max-[425px]:px-2"
                        >

                            <motion.h1
                                variants={textVariant(1.1)}
                                className="md:text-5xl text-3xl font-bold py-12 max-[425px]:py-2"
                            >
                                Need a{" "}
                                <span className="underline decoration-[#F7AB0A] text-extrabold">
                                    Shop?
                                </span>
                            </motion.h1>
                            <motion.div variants={textVariant(1.2)}>
                                <p className="font-bold text-lg md:text-2xl text-darker-white">
                                    Over 25 years specializing in commercial/industrial properties
                                </p>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={textVariant(1.3)}
                            className="max-[768px]:flex items-center justify-center relative z-20"
                        >
                            <a
                                href="/listings"
                                className="relative inline-block text-lg group mb-10 mt-10"
                            >
                                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white ">
                                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                    <span className="absolute left-0 w-64 h-64 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#F7AB0A] group-hover:-rotate-180 ease"></span>
                                    <span className="relative">Browse Properties</span>
                                </span>
                                <span
                                    className="absolute bottom-0 right-0 w-full h-12  -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#F7AB0A]  rounded-lg group-hover:mb-0 group-hover:mr-0"
                                    data-rounded="rounded-lg"
                                ></span>
                            </a>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", "tween", 0.6, 0.95)}
                        className="relative w-[320px] h-[220px] sm:w-[480px] sm:h-[360px] md:w-[600px] md:h-[400px] lg:w-[700px] lg:h-[500px]"
                    >
                        <Image
                            src="/SteelBuilding.png"
                            alt="heroImage"
                            fill
                            sizes="100vw"
                            priority
                            className="object-contain"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >

                <a href="#bulletsection" rel="norefferer" className="animate-pulse flex items-center justify-center mt-[64px] lg:mt-[86px] max-[425px]:mt-[82px] cursor-pointer">
                    <motion.img
                        variants={fadeIn('up', 'tween', 0.3, 1)}
                        src="/arrow-down.svg"
                        alt="arrow down"
                        className="w-[38px] h-[38px] drop-shadow-xl hover:scale-105 transition-transform duration-200 ease-out object-contain  flex items-center justify-center rounded-full bg-[#F7AB0A] px-1 py-1"
                    >
                    </motion.img>
                </a>

            </motion.div>
        </>
    );
};

export default Hero;
