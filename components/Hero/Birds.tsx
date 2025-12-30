"use client"

import Image from "next/image"
import { MessageCircle } from "lucide-react"

export default function Birds() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      {/* Bird Upper Left - with speech bubble */}
      <div className="absolute left-4 sm:left-8 md:left-12 lg:left-16 top-20 sm:top-24 md:top-28 lg:top-32 animate-float">
        <div className="relative">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
            {/* Placeholder for bird SVG - Replace with actual SVG */}
            <div className="w-full h-full bg-blue-900/80 rounded-full flex items-center justify-center">
              <span className="text-white text-xs sm:text-sm">🐦</span>
            </div>
          </div>
          {/* Speech bubble attached to bird */}
          <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full flex items-center justify-center">
            <MessageCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Bird Upper Right - with speech bubble */}
      <div className="absolute right-4 sm:right-8 md:right-12 lg:right-16 top-16 sm:top-20 md:top-24 lg:top-28 animate-floatSlow">
        <div className="relative">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
            <div className="w-full h-full bg-blue-900/80 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">🐦</span>
            </div>
          </div>
          {/* Speech bubble attached to bird */}
          <div className="absolute -top-1 -left-1 w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full flex items-center justify-center">
            <MessageCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Bird Lower Left - in cloud section */}
      <div className="absolute left-8 sm:left-12 md:left-16 lg:left-24 bottom-32 sm:bottom-40 md:bottom-48 lg:bottom-56 animate-float" 
           style={{ animationDelay: "2s" }}>
        <div className="relative">
          <div className="relative w-11 h-11 sm:w-13 sm:h-13 md:w-15 md:h-15">
            <div className="w-full h-full bg-blue-900/80 rounded-full flex items-center justify-center">
              <span className="text-white text-xs sm:text-sm">🐦</span>
            </div>
          </div>
          {/* Speech bubble attached to bird */}
          <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full flex items-center justify-center">
            <MessageCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Bird Lower Left - Second bird */}
      <div className="absolute left-16 sm:left-24 md:left-32 lg:left-40 bottom-28 sm:bottom-36 md:bottom-44 lg:bottom-52 animate-floatSlow" 
           style={{ animationDelay: "3.5s" }}>
        <div className="relative w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13">
          <div className="w-full h-full bg-blue-900/80 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">🐦</span>
          </div>
        </div>
      </div>

      {/* Bird Lower Right - in cloud section with speech bubble */}
      <div className="absolute right-12 sm:right-20 md:right-28 lg:right-36 bottom-30 sm:bottom-38 md:bottom-46 lg:bottom-54 animate-float" 
           style={{ animationDelay: "4s" }}>
        <div className="relative">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
            <div className="w-full h-full bg-blue-900/80 rounded-full flex items-center justify-center">
              <span className="text-white text-xs sm:text-sm">🐦</span>
            </div>
          </div>
          {/* Speech bubble attached to bird */}
          <div className="absolute -top-1 -left-1 w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full flex items-center justify-center">
            <MessageCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" />
          </div>
        </div>
      </div>
    </div>
  )
}
