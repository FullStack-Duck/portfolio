'use client'

import { motion } from 'framer-motion'
import { FaUniversity, FaCertificate } from 'react-icons/fa'

const education = [
  {
    title: 'Computer Science (BSc)',
    place: 'University of London',
    period: '2023 – Present',
    icon: FaUniversity,
  },
  {
    title: 'Web Full Stack Developer',
    place: 'MindHub Bootcamp',
    period: '2022',
    icon: FaCertificate,
  },
  {
    title: 'Duolingo English Test (C1)',
    place: 'Duolingo',
    period: '2021',
    icon: FaCertificate,
  },
]

export default function EducationSection() {
  return (
    <section className="w-full py-24 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-chelsea mb-12"
        >
          Education & Certifications
        </motion.h2>

        <div className="space-y-10 border-l border-chelsea/30 ml-4 pl-6">
          {education.map(({ title, place, period, icon: Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="absolute -left-9 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-chelsea text-white shadow-md">
                <Icon className="text-sm" />
              </div>
              <div className="mb-1 text-sm text-muted-foreground">{period}</div>
              <h3 className="text-lg font-semibold text-chelsea">{title}</h3>
              <p className="text-base text-neutral-700 dark:text-neutral-300">{place}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
