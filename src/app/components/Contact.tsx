'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { fadeInUp, cardHoverSmall } from '@/utils/animations'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (response.ok) {
        setStatus('Message sent successfully!')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        const data = await response.json()
        setStatus(data.message || 'Failed to send message')
      }
    } catch {
      setStatus('Failed to send message')
    }
  }

  return (
    <section className="py-10">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div 
          className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-8 md:p-12"
          {...fadeInUp}
          {...cardHoverSmall}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-center mb-8">
            I&apos;m always open to exploring new projects, innovative ideas, and opportunities where I can contribute and add value.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input 
                type="text" 
                placeholder="Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-dark border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary text-black dark:text-white" 
              />
              <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-dark border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary text-black dark:text-white" 
              />
            </div>
            <textarea 
              placeholder="Message" 
              rows={5} 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-dark border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary mb-4 text-black dark:text-white"
            ></textarea>
            <div className="text-center">
              <motion.button 
                type="submit" 
                className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary/80 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'Sending...'}
              >
                {status === 'Sending...' ? 'Sending...' : 'Send Message'}
              </motion.button>
            </div>
            {status && status !== 'Sending...' && <p className="text-center mt-4">{status}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
