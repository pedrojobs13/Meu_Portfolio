import About from "@/components/About";
import Contato from "@/components/Contato";
import Experience from "@/components/Experience";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero-section";
import Menu from "@/components/Menu";
import Portfolio from "@/components/Portfolio";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Pedro Oliveira"
        description="Desenvolvedor Front-End React, focado em fornecer soluções de qualidade com interfaces intuitivas para atender às demandas dos clientes"
        canonical="http://pedrooliveira.live/"
        openGraph={{
          url: 'http://pedrooliveira.live/',
          title: 'Pedro Oliveira',
          images: [
            {
              url: 'https://avatars.githubusercontent.com/u/101609712?s=400&u=a04c81dc4373bb692f29763cff02316f6776ab1d&v=4',
              width: 400,
              height: 400,
              alt: 'avatar/github'
            },
          ],
          siteName: 'Pedro Oliveira',
        }}
      />
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
