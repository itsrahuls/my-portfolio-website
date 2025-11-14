'use client'

import { motion } from 'framer-motion'
import { fadeInUp, cardHoverSmall } from '@/utils/animations'

export default function Experience() {
  return (
    <section className="py-10">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div 
          className="bg-white dark:bg-dark/50 rounded-2xl shadow-md p-8 md:p-12"
          {...fadeInUp}
          {...cardHoverSmall}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">Freelance Web Designer</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Aug 2025 - Present</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Self-Employed | Remote</p>
              <ul className="list-disc list-inside space-y-2 text-left">
                <li>Designed and built responsive, user-focused websites for clients, achieving a 95% user satisfaction rate.</li>
                <li>Built modern, high-performance interfaces using HTML, CSS, JavaScript, React.js, and Tailwind CSS, reducing page load time by 40%.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
