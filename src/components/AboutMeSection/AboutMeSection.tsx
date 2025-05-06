'use client';

import styles from './aboutMeSection.module.css';
import { motion } from 'framer-motion';

export default function AboutMeSection() {
  return (
    <section className={styles.container}>
     <motion.div
  className={styles.content}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h2 className={styles.title}>About Me</h2>
  <p className={styles.paragraph}>
    I'm <strong>Nicolas Sandrin</strong>, a Full Stack Developer with over 5 years of experience working at companies where I've built efficient, scalable, and secure systems.
  </p>
  <p className={styles.paragraph}>
    I'm currently working as a React Developer and looking to collaborate on projects where I can contribute with both technical expertise and a human-centered mindset.
  </p>
  <p className={styles.paragraph}>
    This site reflects my professional profile. Soon, you'll also be able to discover my creative side as <strong>FullStack Duck 🦆</strong>.
  </p>
</motion.div>

    </section>
  );
}
