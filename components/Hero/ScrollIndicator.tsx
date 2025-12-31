"use client"

import Image from "next/image"

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none">
      <span className="text-sm text-gray-600 font-medium">Scroll to learn more</span>
      <Image 
        src="/assets/arrow-down-icon.svg" 
        alt="Scroll down" 
        width={32} 
        height={32}
        className="w-8 h-8"
      />
    </div>
  )
}

