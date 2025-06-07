'use client'

import { motion } from 'framer-motion'

export default function LookingForSection() {
  return (
    <section className="w-full py-20 bg-[#FFD700]/30 dark:bg-[#FFD700]/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-semibold text-chelsea mb-4"
        >
          What I’m Looking For
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-base sm:text-lg text-neutral-800 dark:text-neutral-200 max-w-2xl mx-auto mb-8"
        >
          I’m currently open to remote freelance work, contract-based roles, and collaborations with startups and small businesses looking to build meaningful, modern web applications.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="italic text-lg sm:text-xl text-chelsea font-medium"
        >
          Let’s build something meaningful together.
        </motion.p>
      </div>
    </section>
  )
}
