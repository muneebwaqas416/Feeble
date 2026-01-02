"use client"

import React from 'react'
import Image from 'next/image'

const Clouds = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[1200px] sm:h-[1500px] md:h-[1800px] lg:h-[2000px] overflow-hidden pointer-events-none z-0">
      {/* CONTAINER: Sticks everything to the bottom */}
      <div className="absolute opacity-10 bottom-0 left-0 w-full leading-[0]">
        
        {/* LAYER 1: White Cloud (Back Layer) - Lowest z-index, furthest back */}
        <div className="absolute bottom-0 w-full z-30">
          <Image 
            src="/assets/white-cloud.svg" 
            alt="White cloud layer" 
            width={1920} 
            height={200}
            className="w-full h-auto min-h-[150px] sm:min-h-[180px] md:min-h-[200px]"
            priority
          />
        </div>

        {/* LAYER 2: Lightest Blue Cloud - Second layer */}
        <div className="absolute bottom-0 w-full z-20" style={{ transform: 'translateY(4px)' }}>
          <Image 
            src="/assets/lightest-blue-cloud.svg" 
            alt="Lightest blue cloud layer" 
            width={1920} 
            height={300}
            className="w-full h-auto min-h-[200px] sm:min-h-[250px] md:min-h-[300px]"
            priority
          />
        </div>

        {/* LAYER 3: Light Blue Cloud - Third layer */}
        <div className="absolute bottom-0 w-full  z-10" style={{ transform: 'translateY(8px)' }}>
          <Image 
            src="/assets/light-blue-cloud.svg" 
            alt="Light blue cloud layer" 
            width={1919} 
            height={450}
            className="w-full h-auto min-h-[350px] sm:min-h-[400px] md:min-h-[450px]"
            priority
          />
        </div>

        {/* LAYER 4: Dark Blue Cloud (Front Layer) - Highest z-index, front */}
        <div className="absolute bottom-0 w-full z-0" style={{ transform: 'translateY(12px)' }}>
          <Image 
            src="/assets/dark-blue-cloud.svg" 
            alt="Dark blue cloud layer" 
            width={1920} 
            height={600}
            className="w-full h-auto min-h-[450px] sm:min-h-[550px] md:min-h-[600px]"
            priority
          />
        </div>

      </div>
    </div>
  )
}

export default Clouds
