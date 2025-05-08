'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 my-12 sm:my-16 lg:my-20">
<div className="rounded-xl shadow-lg bg-gradient-to-br from-[#f9fafb] to-[#e5e7eb] dark:from-[#111827] dark:to-[#1f2937] min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-center py-12 sm:py-16 lg:py-24">
<div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-24 px-4 sm:px-6 lg:gap-40">

          {/* HERO BLOCK */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 sm:gap-20 lg:gap-32 w-full px-4 sm:px-10 lg:px-16">
          <motion.div
              className="flex-1 text-center md:text-left"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-chelsea mb-4">Welcome!</h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-chelsea/80 mb-4">
                Nicolas Sandrin<br />Full Stack Developer
              </h2>
              <Link href="/journey">
                <Button className="text-base sm:text-lg px-5 py-3 sm:px-6 sm:py-3 bg-gold text-black hover:bg-chelsea hover:text-white transition-colors duration-300">
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
                width={280}
                height={280}
                className="rounded-full shadow-lg object-cover sm:w-[300px] sm:h-[300px] md:w-[320px] md:h-[320px]"
              />
            </motion.div>
          </div>

          {/* ABOUT */}
          <div className="text-center max-w-3xl px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-chelsea mb-6">About Me</h2>
            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 mb-4">
              I'm <strong>Nicolas Sandrin</strong>, a Full Stack Developer with over 5 years of experience building efficient, scalable, and secure systems.
            </p>
            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 mb-4">
              I'm currently working as a React Developer and looking to collaborate on projects where I can contribute both technically and with a human-centered mindset.
            </p>
            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
              This site reflects my professional profile. Soon, you'll also discover my creative side as <strong>FullStack Duck 🦆</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
