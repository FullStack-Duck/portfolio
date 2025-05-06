'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava, FaAws, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiSolidity, SiJavascript, SiShadcnui } from 'react-icons/si';

const techList = [
  {
    name: 'JavaScript',
    icon: <SiJavascript color="#f7df1e" />,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript color="#3178c6" />,
  },
  {
    name: 'React',
    icon: <FaReact color="#61dafb" />,
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs color="#000000" />,
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss color="#06b6d4" />,
  },
  {
    name: 'ShadCN UI',
    icon: <SiShadcnui color="#6366f1" />,
  },
  {
    name: 'Java',
    icon: <FaJava color="#007396" />,
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs color="#339933" />,
  },
  {
    name: 'Spring Boot',
    icon: (
      <img
      src="/spring-logo.png"
        alt="Spring Boot"
        className="w-10 h-10 object-contain"
      />
    ),
  },
  {
    name: 'AWS',
    icon: <FaAws color="#ff9900" />,
  },
  {
    name: 'Solidity',
    icon: <SiSolidity color="#363636" />,
  },
];


export default function TechSection() {
    return (
      <section id="tech" className="py-20 bg-neutral">
        <h2 className="text-4xl font-bold text-chelsea text-center mb-12">Technologies I Work With</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
          {techList.map((tech) => (
            <motion.div
              key={tech.name}
              className="bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-6 transition-transform duration-300 cursor-pointer hover:shadow-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-5xl mb-3">{tech.icon}</div>
              <div className="text-lg font-medium text-center text-chelsea">{tech.name}</div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }