"use client"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { HeroSection } from "@/components/sections/hero-section"
import { SnowflakesBackground } from "@/components/snowflakes-background"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-slate-900 text-white relative overflow-hidden">
      <SnowflakesBackground />

      <Navbar />

      <HeroSection />

      <AboutSection />

      <ExperienceSection />

      <Footer />
    </div>
  )
}
