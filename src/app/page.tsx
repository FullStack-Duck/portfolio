"use client";

import HeroSection from "@/components/HeroSection/heroSection";
import Header from "@/components/Header/Header";
import TechSection from "@/components/TechSection/TechSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import Projects from "@/components/ProjectSection/Projects";

export default function Home() {
  return (
    <main className="w-full scroll-smooth">
      <Header />

      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="w-full max-w-6xl mx-auto">
          <HeroSection />
        </div>
      </section>

      <section
        id="tech"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="w-full max-w-6xl mx-auto space-y-16">
          <TechSection />
          <Testimonials />
        </div>
      </section>

      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="w-full max-w-6xl mx-auto">
          <Projects />
        </div>
      </section>
    </main>
  );
}