"use client"

import { Button } from "@/components/ui/button"
import AppleIcon from "@/components/icons/AppleIcon"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function HeroContent() {
  const [showCrossingBirds, setShowCrossingBirds] = useState(false)
  const [showContentBirds, setShowContentBirds] = useState(false)

  useEffect(() => {
    // Start content birds when content appears (small delay to ensure page is ready)
    const contentTimer = setTimeout(() => {
      setShowContentBirds(true)
    }, 100)

    // Start crossing birds after initial frame animation completes
    // Initial animation: 800ms delay + 3500ms duration = 4300ms total
    const crossingTimer = setTimeout(() => {
      setShowCrossingBirds(true)
    }, 4300)

    return () => {
      clearTimeout(contentTimer)
      clearTimeout(crossingTimer)
    }
  }, [])

  return (
    <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 gap-4">
      {/* Two Crossing Birds - Move across screen after initial load */}
      {showCrossingBirds && (
        <>
          {/* Bird moving left to right */}
          <div 
            className="fixed top-[30%] pointer-events-none z-20 hidden sm:block"
            style={{
              animation: 'birdCrossLeftToRight 9s ease-in-out forwards',
            }}
          >
            <Image 
              src="/assets/birds-leftmost.svg" 
              alt="Bird crossing left to right" 
              width={133} 
              height={74}
              className="w-[80px] h-auto sm:w-[100px] md:w-[133px]"
            />
          </div>

          {/* Bird moving right to left */}
          <div 
            className="fixed top-[50%] pointer-events-none z-20 hidden sm:block"
            style={{
              animation: 'birdCrossRightToLeft 9s ease-in-out forwards',
              transform: 'scaleX(-1)', // Flip horizontally for right-to-left
            }}
          >
            <Image 
              src="/assets/birds-rightmost.svg" 
              alt="Bird crossing right to left" 
              width={133} 
              height={74}
              className="w-[80px] h-auto sm:w-[100px] md:w-[133px]"
            />
          </div>
        </>
      )}

      {/* Birds with Speech Bubbles - Lower two static (appear with content), upper two fade in from bottom */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Lower two birds - Appear immediately with content (no delay) */}
        {/* Left Bird - Already at position (static, no animation) */}
        <div 
          className="absolute left-[10%] top-[40%] hidden sm:block"
        >
          <Image 
            src="/assets/left-bird.svg" 
            alt="Left bird" 
            width={43} 
            height={14}
            className="w-[30px] h-auto sm:w-[38px] md:w-[43px]"
          />
        </div>

        {/* Right Most Bird - Already at position (static, no animation) */}
        <div 
          className="absolute right-[5%] top-[65%] hidden sm:block"
        >
          <Image 
            src="/assets/right-most-bird.svg" 
            alt="Right most bird" 
            width={43} 
            height={14}
            className="w-[30px] h-auto sm:w-[38px] md:w-[43px]"
          />
        </div>

        {/* Duplicate birds that animate from bottom and fade out when reaching position */}
        {showContentBirds && (
          <>
            {/* Duplicate Left Bird - Animates from bottom, fades out at target position */}
            <div 
              className="absolute left-[10%] top-[40%] hidden sm:block"
              style={{
                animation: 'birdFadeInOutFromBottom 3s ease-out 0s forwards',
                opacity: 0,
              }}
            >
              <Image 
                src="/assets/left-bird.svg" 
                alt="Left bird duplicate" 
                width={43} 
                height={14}
                className="w-[30px] h-auto sm:w-[38px] md:w-[43px]"
              />
            </div>

            {/* Duplicate Right Most Bird - Animates from bottom, fades out at target position */}
            <div 
              className="absolute right-[5%] top-[65%] hidden sm:block"
              style={{
                animation: 'birdFadeInOutFromBottom 3s ease-out 0.2s forwards',
                opacity: 0,
              }}
            >
              <Image 
                src="/assets/right-most-bird.svg" 
                alt="Right most bird duplicate" 
                width={43} 
                height={14}
                className="w-[30px] h-auto sm:w-[38px] md:w-[43px]"
              />
            </div>
          </>
        )}

        {/* Upper two birds - Fade in from bottom after delay */}
        {showContentBirds && (
          <>
            {/* Left Most Bird - Fades in from bottom */}
            <div 
              className="absolute left-[-5%] sm:left-[-5%] top-[25%] hidden sm:block"
              style={{
                animation: 'birdFadeInFromBottom 2.5s ease-out 0s forwards',
                opacity: 0,
              }}
            >
              <Image 
                src="/assets/left-most-bird.svg" 
                alt="Left most bird" 
                width={43} 
                height={14}
                className="w-[30px] h-auto sm:w-[38px] md:w-[43px]"
              />
            </div>

            {/* Right Bird - Fades in from bottom */}
            <div 
              className="absolute right-[10%] top-[30%] hidden sm:block"
              style={{
                animation: 'birdFadeInFromBottom 2.5s ease-out 0.3s forwards',
                opacity: 0,
              }}
            >
              <Image 
                src="/assets/right-bird.svg" 
                alt="Right bird" 
                width={43} 
                height={14}
                className="w-[30px] h-auto sm:w-[38px] md:w-[43px]"
              />
            </div>
          </>
        )}
      </div>
      
      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col gap-6">
        {/* Feature Badge */}
        <div className="flex items-center justify-center">
          <div 
            className="inline-flex gap-2 items-center bg-white text-base font-medium leading-[120%] tracking-[-0.02em] rounded-2xl"
            style={{
              paddingTop: '4px',
              paddingRight: '8px',
              paddingBottom: '5px',
              paddingLeft: '8px',
              boxShadow: 'var(--sds-size-depth-0) var(--sds-size-depth-025) var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100)',
            }}
          >
            <Image src="/assets/feature-badge.svg" alt="Feature Badge" width={32} height={16} />
            <span className="text-feature-badge-text text-base font-medium leading-[120%] tracking-[-0.02em]">#1 iMessage Automation Tool</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-[64px] font-bold text-center leading-tight">
          <span className="text-heading-primary">iMessage</span>
          <span className="text-heading-secondary"> Automation for Teams and AI Workflows.</span>
        </h1>

        {/* Description */}
        <p className="text-[18px] font-normal leading-[130%] tracking-[-0.02em] text-center text-description-text">
          Coup lets you, your team, or AI workflows send iMessages directly from your phone number, running securely on your Mac or Mac Mini.
        </p>
      </div>
      <div className="relative z-10 flex gap-[12px]">
        <Button 
          className="bg-button-primary-bg text-button-primary-text text-base font-medium leading-[120%] tracking-[-0.02em] rounded-[43.62px] py-[12px] px-[20px] gap-[6.98px] hover:bg-button-primary-bg hover:opacity-100 !transition-none"
        >
          Get Started
        </Button>
        <div 
          className="inline-flex items-center rounded-[50px] px-[20px] border border-[#6C788F] bg-transparent"
          style={{
            gap: '12px',
            borderWidth: '0.7px',
          }}
        >
          <AppleIcon 
            className="w-[19px] h-[22px] text-[#1D2026]"
          />
          <div 
            className="bg-separator"
            style={{
              width: '0.5px',
              height: '18px',
            }}
          />
          <span className="text-[#1D2026] text-base font-medium leading-[120%] tracking-[-0.02em]">
            Download the Mac app
          </span>
        </div>
      </div>

    </div>
  )
}
