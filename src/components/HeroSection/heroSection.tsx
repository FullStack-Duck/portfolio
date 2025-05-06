'use client';

import styles from './heroSection.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className={styles.container}>
      <motion.div
        className={styles.textBlock}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>Welcome!</h1>
        <h2 className={styles.subtitle}>
          Nicolas Sandrin<br />Full Stack Developer
        </h2>
        <Link href="/journey">
          <Button className={styles.button}>Start your Journey Here</Button>
        </Link>
      </motion.div>

      <motion.div
        className={styles.imageWrapper}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/profile.jpeg"
          alt="Nicolas Sandrin"
          width={320}
          height={320}
          className={styles.image}
        />
      </motion.div>
    </section>
  );
}
