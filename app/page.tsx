import { Montserrat } from "next/font/google"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import TechCarousel from "@/components/tech-carousel"
import ServicesListSection from "@/components/services-list-section"
import AIChatSection from "@/components/ai-chat-section"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import PhoneCallButton from "@/components/phone-call-button"
import BackgroundVideo from "@/components/background-video"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
})

export default function Home() {
  return (
    <div className={`min-h-screen bg-black overflow-hidden ${montserrat.variable} font-montserrat`}>
      {/* Background Video */}
      <BackgroundVideo />

      <div className="relative z-10">
        <Header />
        <main>
          <div id="home">
            <HeroSection />
          </div>
          <TechCarousel />
          <ServicesListSection />
          <AIChatSection />
          <div id="servicos">
            <ServicesSection />
          </div>
          <div id="projetos">
            <ProjectsSection />
          </div>
          <div id="contato">
            <ContactSection />
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
        <PhoneCallButton />
      </div>
    </div>
  )
}
