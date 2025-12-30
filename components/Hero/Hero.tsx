"use client"

import Header from "@/components/Header/Header"
import Clouds from "./Clouds"
import Birds from "./Birds"
import HeroContent from "./HeroContent"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-sky">
      {/* Main Content Container - Matches Figma layout */}
      <div 
        className="relative z-50 left-1/2 -translate-x-1/2 w-full max-w-[1680px] px-[120px]"
        style={{
          paddingTop: '40px',
        }}
      >
        <Header />
        <HeroContent />
      </div>
      {/* <Clouds />
      <Birds /> */}
    </section>
  )
}

