'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function FreelanceHero() {
  return (
    <section className="w-full bg-gradient-to-br from-[#f9fafb] to-[#e5e7eb] dark:from-[#111827] dark:to-[#1f2937] py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-16">

        {/* Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-chelsea mb-4">
            Nicolas Sandrin
          </h1>
          <p className="text-xl text-neutral-800 dark:text-neutral-200 mb-6">
            Full Stack Developer specialized in Java, React, and Web3.
          </p>
          <p className="text-base text-neutral-700 dark:text-neutral-300 max-w-xl">
            I help companies and startups build scalable, modern web applications using clean code and efficient architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/cv/NicolasSandrin_CV.pdf" target="_blank">
              <Button variant="default">📄 Download CV</Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline">💬 Contact Me</Button>
            </Link>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-xl border-4 border-chelsea"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/profile.jpeg"
            alt="Nicolas Sandrin"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
