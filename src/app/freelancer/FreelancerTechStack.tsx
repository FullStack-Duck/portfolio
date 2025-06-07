'use client'

import { motion } from 'framer-motion'
import { SiSpringboot, SiNodedotjs, SiPostgresql, SiMongodb, SiReact, SiRedux, SiTypescript, SiTailwindcss, SiNextdotjs, SiSolidity, SiDocker, SiGithubactions, SiVercel } from 'react-icons/si'
import { FaJava, FaAws } from 'react-icons/fa'

const stack = [
  {
    category: 'Backend',
    items: [
      { name: 'Java', icon: FaJava },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'Redux', icon: SiRedux },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Next.js', icon: SiNextdotjs },
    ],
  },
  {
    category: 'Web3',
    items: [
      { name: 'Solidity', icon: SiSolidity },
    ],
  },
  {
    category: 'Infra & Tools',
    items: [
      { name: 'AWS', icon: FaAws },
      { name: 'Docker', icon: SiDocker },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Vercel', icon: SiVercel },
    ],
  },
]

export default function TechStackSection() {
  return (
    <section className="w-full py-24 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-chelsea mb-12"
        >
          Tech Stack
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stack.map(({ category, items }, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-xl border border-gray-200 dark:border-neutral-800 p-6 shadow-sm bg-neutral-50 dark:bg-neutral-900 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-semibold text-chelsea mb-4">{category}</h3>
              <ul className="space-y-3">
                {items.map(({ name, icon: Icon }) => (
                  <li key={name} className="flex items-center gap-3 text-base text-neutral-800 dark:text-neutral-300">
                    <Icon className="text-xl text-chelsea" />
                    {name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
