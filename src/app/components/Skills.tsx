'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, cardHoverSmall } from '@/utils/animations'

const skills = {
  frontend: [
    { name: "React.js" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "HTML5 / CSS3" },
  ],
  backend: [
    { name: "Node.js" },
    { name: "PostgreSQL" },
  ],
  tools: [
    { name: "Git / GitHub" },
    { name: "Docker" },
    { name: "AWS" },
  ],
}

export default function Skills() {
  return (
    <section className="py-10">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              variants={fadeInUp} 
              className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"
              {...cardHoverSmall}
            >
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <ul className="space-y-2">
                {skills.frontend.map((skill) => (
                  <li key={skill.name} className="text-gray-600 dark:text-gray-300">{skill.name}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              variants={fadeInUp} 
              className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"
              {...cardHoverSmall}
            >
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <ul className="space-y-2">
                {skills.backend.map((skill) => (
                  <li key={skill.name} className="text-gray-600 dark:text-gray-300">{skill.name}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              variants={fadeInUp} 
              className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"
              {...cardHoverSmall}
            >
              <h3 className="text-xl font-semibold mb-4">Tools & Others</h3>
              <ul className="space-y-2">
                {skills.tools.map((skill) => (
                  <li key={skill.name} className="text-gray-600 dark:text-gray-300">{skill.name}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
