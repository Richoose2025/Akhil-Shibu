import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import NavBar from "@/components/nav-bar"

export const metadata: Metadata = {
  title: "Akhil Shibu | Portfolio",
  description: "Professional portfolio of Akhil Shibu, BCA graduate and cloud technology enthusiast",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
