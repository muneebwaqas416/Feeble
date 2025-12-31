"use client"

import Image from "next/image"

export default function Birds() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-10">
      {/* Bird 1: Leftmost - Based on exact pixel values */}
      <div className="absolute" style={{ left: '19.37%', top: '55.68%' }}>
        <Image 
          src="/assets/birds-leftmost.svg" 
          alt="Bird leftmost" 
          width={103.38} 
          height={61.65}
          className="w-auto h-auto"
        />
      </div>

      {/* Bird 2: Left - Based on exact pixel values */}
      <div className="absolute" style={{ left: '34.66%', top: '61.57%' }}>
        <Image 
          src="/assets/birds-left.svg" 
          alt="Bird left" 
          width={87.74} 
          height={56.99}
          className="w-auto h-auto"
        />
      </div>

      {/* Bird 3: Right - Based on exact pixel values */}
      <div className="absolute" style={{ left: '65.85%', top: '68.52%' }}>
        <Image 
          src="/assets/birds-right.svg" 
          alt="Bird right" 
          width={127.08} 
          height={41.89}
          className="w-auto h-auto"
        />
      </div>

      {/* Bird 4: Rightmost - Based on exact pixel values */}
      <div className="absolute" style={{ left: '82.15%', top: '61.67%' }}>
        <Image 
          src="/assets/birds-rightmost.svg" 
          alt="Bird rightmost" 
          width={113.40} 
          height={101.99}
          className="w-auto h-auto"
        />
      </div>
    </div>
  )
}

