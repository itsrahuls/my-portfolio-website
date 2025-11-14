'use client'

import { motion } from 'framer-motion'
import { fadeInUp, cardHoverSmall } from '@/utils/animations'

export default function About() {
  return (
    <section className="py-10">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div 
          className="bg-white dark:bg-dark/50 rounded-2xl shadow-md p-8 md:p-12"
          {...fadeInUp}
          {...cardHoverSmall}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-justify">
            I am a Full-Stack Developer specializing in scalable, AI-powered web applications using tools such as OpenAI and Gemini. I focus on solving real-world problems by developing innovative user-centric solutions with modern web technologies.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
