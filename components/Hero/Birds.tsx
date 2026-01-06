"use client"

import Image from "next/image"

export default function Birds() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] xl:h-[650px] 2xl:h-[700px] pointer-events-none z-10">
      {/* Bird 1: Leftmost - bottom: 154.61px from page bottom (1080 - 925.39) */}
      <div 
        className="absolute hidden sm:block" 
        style={{ 
          left: 'calc(19.37% - 51.69px)', // Centers bird at 371.92px from left edge
          bottom: '154.61px'
        }}
      >
        <Image 
          src="/assets/birds-leftmost.svg" 
          alt="Bird leftmost" 
          width={103.38} 
          height={76.75}
          className="w-[60px] h-auto sm:w-[70px] md:w-[85px] lg:w-[95px] xl:w-[103.38px]"
        />
      </div>

      {/* Bird 2: Left - bottom: 199px from page bottom (1080 - 881) */}
      <div 
        className="absolute hidden sm:block" 
        style={{ 
          left: 'calc(34.65% - 43.87px)', // Centers bird at 665.18px from left edge
          bottom: '199px'
        }}
      >
        <Image 
          src="/assets/birds-left.svg" 
          alt="Bird left" 
          width={87.74} 
          height={56.99}
          className="w-[50px] h-auto sm:w-[60px] md:w-[70px] lg:w-[80px] xl:w-[87.74px]"
        />
      </div>

      {/* Bird 3: Right - bottom: 124px from page bottom (1080 - 956) */}
      <div 
        className="absolute hidden sm:block" 
        style={{ 
          left: 'calc(65.79% - 64.11px)', // Centers bird at 1263.18px from left edge
          bottom: '124px'
        }}
      >
        <Image 
          src="/assets/birds-right.svg" 
          alt="Bird right" 
          width={128.21} 
          height={54.38}
          className="w-[70px] h-auto sm:w-[85px] md:w-[100px] lg:w-[115px] xl:w-[128.21px]"
        />
      </div>

      {/* Bird 4: Rightmost - bottom: 198px from page bottom (1080 - 882) */}
      <div 
        className="absolute hidden sm:block" 
        style={{ 
          left: 'calc(82.14% - 64.47px)', // Centers bird at 1577.18px from left edge
          bottom: '198px'
        }}
      >
        <Image 
          src="/assets/birds-rightmost.svg" 
          alt="Bird rightmost" 
          width={128.93} 
          height={101.99}
          className="w-[65px] h-auto sm:w-[80px] md:w-[95px] lg:w-[110px] xl:w-[128.93px]"
        />
      </div>
    </div>
  )
}

