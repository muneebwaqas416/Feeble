"use client"

import Image from "next/image"

export default function Birds() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-10">
      {/* Bird 1: Leftmost - Responsive positioning and sizing */}
      <div className="absolute hidden sm:block" style={{ left: '19.37%', top: '55.68%' }}>
        <Image 
          src="/assets/birds-leftmost.svg" 
          alt="Bird leftmost" 
          width={103.38} 
          height={61.65}
          className="w-[60px] h-auto sm:w-[80px] md:w-[103px]"
        />
      </div>

      {/* Bird 2: Left - Responsive positioning and sizing */}
      <div className="absolute hidden sm:block" style={{ left: '34.66%', top: '61.57%' }}>
        <Image 
          src="/assets/birds-left.svg" 
          alt="Bird left" 
          width={87.74} 
          height={56.99}
          className="w-[50px] h-auto sm:w-[70px] md:w-[88px]"
        />
      </div>

      {/* Bird 3: Right - Responsive positioning and sizing */}
      <div className="absolute hidden sm:block" style={{ left: '65.85%', top: '68.52%' }}>
        <Image 
          src="/assets/birds-right.svg" 
          alt="Bird right" 
          width={127.08} 
          height={41.89}
          className="w-[70px] h-auto sm:w-[100px] md:w-[127px]"
        />
      </div>

      {/* Bird 4: Rightmost - Responsive positioning and sizing */}
      <div className="absolute hidden sm:block" style={{ left: '82.15%', top: '61.67%' }}>
        <Image 
          src="/assets/birds-rightmost.svg" 
          alt="Bird rightmost" 
          width={113.40} 
          height={101.99}
          className="w-[65px] h-auto sm:w-[90px] md:w-[113px]"
        />
      </div>
    </div>
  )
}

