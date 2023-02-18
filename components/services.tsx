"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { slideIn, staggerContainer } from '@/utils/motion'
import styles from '@/styles'


const Services = () => {
  return (
    <section id="services" className={`${styles.innerWidth} relative flex items-center justify-center`}>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25}}
        >   
        <motion.div variants={slideIn('up', 'tween', 0.3, 0.85)}>
                <h3 className="text-5xl">Services</h3>
        </motion.div>
        </motion.div>
    </section>
  )
}

export default Services