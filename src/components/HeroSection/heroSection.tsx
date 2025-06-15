'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
<section className="w-full bg-gradient-to-br from-[#f9fafb] to-[#e5e7eb] dark:from-[#111827] dark:to-[#1f2937] pt-32 pb-20">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center justify-center gap-24 px-4 sm:px-6 lg:gap-40">
        
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 sm:gap-20 lg:gap-32 w-full px-4 sm:px-10 lg:px-8">
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
            
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
  <Link href="/freelancer">
    <Button variant="default" className="px-5 py-3">
      🧑‍💻 Freelancer Profile
    </Button>
  </Link>
  
</div>  
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
               <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto mb-6">
        <Image
          src="/profile.jpeg"
          alt="Nicolas Sandrin"
          fill
          sizes="(max-width: 640px) 256px, 320px"
          className="rounded-full object-cover"
          priority
        />
      </div>
          </motion.div>
        </div>

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
    </section>
  );
}
  