"use client";

import HeroSection from "@/components/HeroSection/heroSection";
import Header from "@/components/Header/Header";
import TechSection from "@/components/TechSection/TechSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import Projects from "@/components/ProjectSection/Projects";

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <Header />

      <section
  id="home"
  className="h-screen snap-start scroll-mt-24 flex items-center justify-center px-6 md:px-12 lg:px-20"
>
  <div className="flex flex-col justify-center items-center gap-12 w-full">
    <HeroSection />
  </div>
</section>


      <section id="tech" className="min-h-screen snap-start scroll-mt-24 flex flex-col justify-evenly px-8 py-12">
        <TechSection />
        <Testimonials />
      </section>

      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>

      <section
        id="footer"
        className="min-h-screen snap-start scroll-mt-24 bg-[#034694] text-white flex flex-col items-center justify-center"
      >
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Let’s connect</h2>
          <p className="text-lg opacity-80">Coming soon: contact, social links and more.</p>
        </div>
      </section>
    </div>
  );
}
