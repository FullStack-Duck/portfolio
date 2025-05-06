'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="w-full h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 bg-gradient-to-br from-[#f9fafb] to-[#e5e7eb] dark:from-[#111827] dark:to-[#1f2937]">
      <motion.div
        className="flex-1 max-w-xl text-center md:text-left"
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
    </section>
  );
}
