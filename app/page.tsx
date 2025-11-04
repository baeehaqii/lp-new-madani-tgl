import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Header from "@/components/header"
import About from "@/components/about"
import Properties from "@/components/properti"
import Features from "@/components/features"
import Gallery from "@/components/gallery"
import YouTube from "@/components/youtube"
import Testimonials from "@/components/testimoni"
import FAQ from "@/components/faq"
import CallToAction from "@/components/cta"
import Accessibility from "@/components/accessibility"
import Concepts from "@/components/concepts"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Analytics } from "@vercel/analytics/next"

export default function HomePage() {
  return (
    <main>
      <Analytics/>
      <Header />
      <Hero />
      <About />
      <Properties />
      <Accessibility />
      <Features />
      <Concepts />
      <Gallery />
      <YouTube />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
