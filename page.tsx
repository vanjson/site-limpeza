import { TopBanner } from "@/components/top-banner"
import { Navbar } from "@/components/navbar"
import { HeroSlider } from "@/components/hero-slider" // Novo componente
import { QuoteSimulator } from "@/components/quote-simulator"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function Page() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <main>
        <HeroSlider />
        <QuoteSimulator />
        <Services />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
