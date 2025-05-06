"use client";

import HeroSection from "@/components/HeroSection/heroSection";
import AboutMeSection from "@/components/AboutMeSection";
import Header from "@/components/Header/Header";
import TechSection from "@/components/TechSection/TechSection";
import Testimonials from "@/components/Testimonials/Testiomnials";
import Projects from "@/components/ProjectSection/Projects";

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <Header />

      <section id="home" className="h-screen snap-start scroll-mt-24 flex flex-col justify-evenly px-8 py-12">
  <HeroSection />
  <AboutMeSection />
</section>

<section id="tech" className="h-screen snap-start scroll-mt-24 flex flex-col justify-evenly px-8 py-12">
  <TechSection />
  <Testimonials />
</section>

<section id="projects" className="scroll-mt-24">
  <Projects />
</section>


<section
  id="footer"
  className="h-screen snap-start scroll-mt-24 bg-[#034694] text-white flex flex-col items-center justify-center"
>
  <div className="text-center space-y-4">
    <h2 className="text-4xl font-bold">Let’s connect</h2>
    <p className="text-lg opacity-80">Coming soon: contact, social links and more.</p>
  </div>
</section>
    </div>
  );
}
