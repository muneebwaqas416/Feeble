"use client"

export default function Clouds() {
  return (
    <div className="absolute bottom-0 left-0 w-full pointer-events-none">
      {/* Cloud Layer 1 - Light */}
      <div className="absolute bottom-0 w-full h-48 bg-cloud-light rounded-t-[100%] animate-drift" 
           style={{ animationDelay: "0s" }} />
      
      {/* Cloud Layer 2 - Medium */}
      <div className="absolute bottom-0 w-full h-56 bg-cloud-medium rounded-t-[100%] -mt-20 animate-drift" 
           style={{ animationDelay: "5s" }} />
      
      {/* Cloud Layer 3 - Dark */}
      <div className="absolute bottom-0 w-full h-64 bg-cloud-dark rounded-t-[100%] -mt-24 animate-drift" 
           style={{ animationDelay: "10s" }} />
      
      {/* Additional cloud layers for depth - Responsive */}
      <div className="absolute bottom-0 w-full h-40 bg-cloud-light/80 rounded-t-[100%] -mt-16 animate-drift hidden sm:block" 
           style={{ animationDelay: "15s" }} />
    </div>
  )
}

