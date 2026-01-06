"use client"

import Image from "next/image"

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 xl:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none">
      <span className="text-xs sm:text-sm text-gray-600 font-medium">Scroll to learn more</span>
      <Image 
        src="/assets/arrow-down-icon.svg" 
        alt="Scroll down" 
        width={32} 
        height={32}
        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
      />
    </div>
  )
}

