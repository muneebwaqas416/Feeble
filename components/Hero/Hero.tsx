"use client"

import Header from "@/components/Header/Header"
import HeroContent from "./HeroContent"
import Clouds from "./Clouds"
import Birds from "./Birds"
import ScrollIndicator from "./ScrollIndicator"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-sky overflow-hidden">
      {/* Initial Screen Overlay - Shows first, then fades out - Covers entire page */}
      <div 
        className="fixed inset-0 z-[100] pointer-events-none animate-fade-out-fast"
        style={{
          background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), linear-gradient(0deg, #007AFF, #007AFF)',
        }}
      />
      
      {/* Main Content Container - On top (z-50) */}
      <div 
        className="relative z-50 left-1/2 -translate-x-1/2 w-full max-w-[1680px] px-[120px]"
        style={{
          paddingTop: '40px',
          paddingBottom: '2rem',
        }}
      >
        <Header />
        <HeroContent />
      </div>
      
      {/* Clouds, Birds, and Scroll Indicator Section - 2rem gap from content */}
      <div className="relative  w-full" style={{ marginTop: '20rem', minHeight: '300px' }}>
        {/* Clouds - Background layers starting from bottom (z-0) */}
        <Clouds />
        
        {/* Birds - Above clouds (z-10) */}
        <Birds />
        
        {/* Scroll Indicator - Above clouds (z-10) */}
        <ScrollIndicator />
      </div>
    </section>
  )
}

