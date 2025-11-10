"use client"

import { useTheme } from "./hooks/useTheme"
import ThemeToggle from "./components/ThemeToggle"
import HeroSection from "./components/HeroSection"
import ProjectsSection from "./components/ProjectsSection"
import ExperienceSection from "./components/ExperienceSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

export default function Home() {
  const { isDark, mounted, toggleTheme } = useTheme()

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen">
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}
