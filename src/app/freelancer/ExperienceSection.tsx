'use client'

import { motion } from 'framer-motion'
import { FaLaptopCode, FaProjectDiagram, FaCode, FaRobot, FaGlobe } from 'react-icons/fa'

const experiences = [
  {
    company: 'GlobalLogic / Hootsuite',
    role: 'Full Stack Software Engineer',
    period: '2024 – Present',
    icon: FaLaptopCode,
    description:
      'Maintaining and building scalable services for Hootsuite’s internal systems using Java Spring Boot, React, TypeScript, REST APIs and AWS.',
  },
  {
    company: 'TSOFT / Telefónica',
    role: 'Java Lead Developer',
    period: '2023 – 2024',
    icon: FaProjectDiagram,
    description:
      'Led the development of a brand-new TopUp system for Movistar and Tuenti using Java, Spring Boot, SOAP APIs, and Oracle WebLogic. High-load system used by millions.',
  },
  {
    company: 'Epidata',
    role: 'Backend Developer',
    period: '2022 – 2023',
    icon: FaCode,
    description:
      'Worked on national systems for the Ministry of Economy and Ministry of Social Development in Argentina. Stack: Java, Spring Boot, React, PostgreSQL, MongoDB.',
  },
  {
    company: 'Luxury Presence',
    role: 'Web Builder',
    period: '2021 – 2022',
    icon: FaGlobe,
    description:
      'Developed high-end real estate websites using React for clients in the U.S. market. Focus on UI quality and client delivery.',
  },
  {
    company: 'Deepgram',
    role: 'AI Trainer',
    period: '2020 – 2021',
    icon: FaRobot,
    description:
      'Trained AI models to perform live voice recognition. Developed virtual training pipelines using Python.',
  },
]

export default function ExperienceSection() {
  return (
    <section className="w-full py-24 bg-[#f9fafb] dark:bg-[#1f2937]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-chelsea mb-16"
        >
          Experience
        </motion.h2>

        <div className="relative border-l border-chelsea/30 ml-4 pl-6 space-y-12">
          {experiences.map(({ company, role, period, icon: Icon, description }, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-9 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-chelsea text-white shadow-md">
                <Icon className="text-sm" />
              </div>
              <div className="mb-1 text-sm text-muted-foreground">{period}</div>
              <h3 className="text-xl font-semibold text-chelsea">{role}</h3>
              <p className="text-base font-medium text-neutral-700 dark:text-neutral-300">{company}</p>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
