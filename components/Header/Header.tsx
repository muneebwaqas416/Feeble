"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="relative w-full h-[81px] mb-8">
      <nav 
        className="flex items-center  justify-between bg-white rounded-[200px] w-full"
        style={{
          paddingTop: '20px',
          paddingRight: '20px',
          paddingBottom: '20px',
          paddingLeft: '24px',
          boxShadow: 'var(--sds-size-depth-0) var(--sds-size-depth-025) var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100)',
        }}
      >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/assets/logo.svg" alt="Logo" width={100} height={100} />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="#how-it-works" className="text-nav-link text-base font-medium leading-none tracking-normal transition-colors hover:text-gray-900">
              How it Works
            </Link>
            <Link href="#pricing" className="text-nav-link text-base font-medium leading-none tracking-normal transition-colors hover:text-gray-900">
              Pricing
            </Link>
            <Link href="#use-case" className="text-nav-link text-base font-medium leading-none tracking-normal transition-colors hover:text-gray-900">
              Use Case
            </Link>
            <Link href="#faq" className="text-nav-link text-base font-medium leading-none tracking-normal transition-colors hover:text-gray-900">
              FAQ
            </Link>
          </div>

          {/* Contact Sales Button */}
          <Button 
            className="bg-button-primary-bg text-button-primary-text text-base font-medium leading-[120%] tracking-[-0.02em] rounded-[43.62px] py-[11px] px-[18px] gap-[6.98px] hover:opacity-90 transition-opacity"
          >
            Contact Sales
          </Button>
      </nav>
    </header>
  )
}

