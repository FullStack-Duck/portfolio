'use client';

import { motion } from 'framer-motion';

export default function AboutMeSection() {
  return (
    <section className="bg-white text-chelsea px-6 py-16">
      <motion.div
        className="max-w-3xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-chelsea mb-6">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I'm <strong>Nicolas Sandrin</strong>, a Full Stack Developer with over 5 years of experience working at companies where I've built efficient, scalable, and secure systems.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          I'm currently working as a React Developer and looking to collaborate on projects where I can contribute with both technical expertise and a human-centered mindset.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          This site reflects my professional profile. Soon, you'll also be able to discover my creative side as <strong>FullStack Duck 🦆</strong>.
        </p>
      </motion.div>
    </section>
  );
}
