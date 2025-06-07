import Header from '@/components/Header/Header'
import HeroSection from '@/components/HeroSection/heroSection'
import TechSection from '@/components/TechSection/TechSection'
import Projects from '@/components/ProjectSection/Projects'
import Testimonials from '@/components/Testimonials/Testimonials'
import Footer from '@/components/Footer/Footer'

export default function LandingPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <main>
        <section id="hero"><HeroSection /></section>
        <section id="tech"><TechSection /></section>
        <section id="projects"><Projects /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="footer"><Footer /></section>
      </main>
    </div>
  )
}