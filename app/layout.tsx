import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Feeble - Modern Hero Animation",
  description: "A beautiful hero section with animated birds and clouds",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

