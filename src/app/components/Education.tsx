'use client'

import { motion } from 'framer-motion'
import { fadeInUp, cardHoverSmall } from '@/utils/animations'

export default function Education() {
  return (
    <section className="py-10">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div 
          className="bg-white dark:bg-dark/50 rounded-2xl shadow-md p-8 md:p-12"
          {...fadeInUp}
          {...cardHoverSmall}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="text-left">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">SRM Institute of Science and Technology — Chennai, India</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">CGPA: 7.38/10 (Current)</p>
            </div>
            <div className="flex items-center justify-between mb-2">
                <p className="text-gray-600 dark:text-gray-400">Bachelor of Technology in Computer Science and Engineering</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Jun 2022 – May 2026</p>
            </div>
            <p className="text-left mt-4">
              <span className="font-semibold">Coursework:</span> Data Structures and Algorithms, Object-Oriented Programming, Artificial Intelligence, Database Management Systems, Operating Systems, Machine Learning, Cloud Computing, Computer Networks
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
