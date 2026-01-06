"use client"

import Header from "@/components/Header/Header"
import HeroContent from "./HeroContent"
import Clouds from "./Clouds"
import Birds from "./Birds"
import ScrollIndicator from "./ScrollIndicator"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-sky overflow-hidden" style={{ minHeight: '1080px' }}>
      {/* Initial Screen Overlay - Shows first, then fades out - Covers entire page */}
      <div 
        className="fixed inset-0 z-[100] pointer-events-none animate-fade-out-fast"
        style={{
          background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), linear-gradient(0deg, #007AFF, #007AFF)',
        }}
      />
      
      {/* Main Content Container - On top (z-50) */}
      <div 
        className="relative 2xl:mb-[600px] lg:mb-[500px] xl:[550px] z-50 left-1/2 -translate-x-1/2 w-full max-w-[1680px] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px]"
        style={{
          paddingTop: '40px',
        }}
      >
        <Header />
        <HeroContent />
      </div>
      
      {/* Clouds, Birds, and Scroll Indicator Section - Positioned at bottom with 54px gap */}
      <div className="absolute w-full" style={{ bottom: '0' }}>
        {/* 54px spacer creates the gap between content and clouds */}
        
        <div className="relative h-[454px] sm:h-[554px] md:h-[604px] lg:h-[654px] xl:h-[704px] 2xl:h-[754px]">
          {/* Clouds - Background layers starting from bottom (z-0) */}
          <Clouds />
          
          {/* Birds - Above clouds (z-10) */}
          <Birds />
          
          {/* Scroll Indicator - Above clouds (z-10) */}
          <ScrollIndicator />
        </div>
      </div>
    </section>
  )
}

