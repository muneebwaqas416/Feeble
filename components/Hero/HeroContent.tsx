"use client"

import { Button } from "@/components/ui/button"
import AppleIcon from "@/components/icons/AppleIcon"
import Image from "next/image"

export default function HeroContent() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 mt-[145px] gap-4">
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
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
      <div className="flex gap-[12px]">
        <Button 
          className="bg-button-primary-bg text-button-primary-text text-base font-medium leading-[120%] tracking-[-0.02em] rounded-[43.62px] py-[12px] px-[20px] gap-[6.98px] hover:opacity-90 transition-opacity"
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
