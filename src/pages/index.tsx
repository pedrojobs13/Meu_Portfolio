import About from "@/components/About";
import Contato from "@/components/Contato";
import Experience from "@/components/Experience";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero-section";
import Menu from "@/components/Menu";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <>
      <Menu />
      <HeroSection />
      <About />
      <Features />
      <Experience />
      <Portfolio />
      <Contato />
      <Footer />
    </>
  )
}
