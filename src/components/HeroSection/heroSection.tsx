'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-[#f9fafb] to-[#e5e7eb] dark:from-[#111827] dark:to-[#1f2937] px-4 md:px-12 lg:px-20 py-40">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
        {/* HERO BLOCK */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 w-full">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl font-bold text-chelsea mb-4">Welcome!</h1>
            <h2 className="text-3xl font-medium text-chelsea/80 mb-4">
              Nicolas Sandrin<br />Full Stack Developer
            </h2>
            <Link href="/journey">
              <Button className="text-lg px-6 py-3 bg-gold text-black hover:bg-chelsea hover:text-white transition-colors duration-300">
                Start your Journey Here
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/profile.jpeg"
              alt="Nicolas Sandrin"
              width={320}
              height={320}
              className="rounded-full shadow-lg object-cover"
            />
          </motion.div>
        </div>

        <div className="text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-chelsea mb-6">About Me</h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4">
            I'm <strong>Nicolas Sandrin</strong>, a Full Stack Developer with over 5 years of experience working at companies where I've built efficient, scalable, and secure systems.
          </p>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4">
            I'm currently working as a React Developer and looking to collaborate on projects where I can contribute with both technical expertise and a human-centered mindset.
          </p>
          <p className="text-lg text-neutral-700 dark:text-neutral-300">
            This site reflects my professional profile. Soon, you'll also be able to discover my creative side as <strong>FullStack Duck 🦆</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
