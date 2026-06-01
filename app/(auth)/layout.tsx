"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { BANK_NAME } from "@/lib/brand"
import { Star, ArrowRight } from "lucide-react"

const TESTIMONIALS = [
  { 
    quote: "The most intuitive banking experience I've ever had. Transfers are instant and the app is beautifully designed.", 
    author: "Michael Thompson",
    role: "Business Owner",
    rating: 5
  },
  { 
    quote: "Finally a bank that understands modern finance. The security features give me complete peace of mind.", 
    author: "Sarah Kim",
    role: "Software Engineer",
    rating: 5
  },
  { 
    quote: "Switched from my traditional bank and never looked back. The customer service is exceptional.", 
    author: "James Oliver",
    role: "Freelance Designer",
    rating: 5
  },
]

function BrandPanel() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveIdx((i) => (i + 1) % TESTIMONIALS.length)
        setIsAnimating(false)
      }, 300)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative hidden lg:flex lg:w-[50%] flex-col overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/features.webp"
        alt=""
        fill
        className="object-cover"
        quality={85}
        priority
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0A1628]/90" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-12 xl:p-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group w-fit">
          <Image
            src="/images/logo.svg"
            alt={BANK_NAME}
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold text-white tracking-tight">{BANK_NAME}</span>
        </Link>

        {/* Main content area */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight mb-4">
            Banking that moves
            <br />
            at your speed
          </h1>
          <p className="text-lg text-white/60 max-w-md">
            Experience the future of finance with instant transfers, premium security, and a beautifully crafted interface.
          </p>
        </div>

        {/* Testimonial */}
        <div className="mt-auto">
          <div 
            className={`p-6 rounded-2xl bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] transition-all duration-300 ${
              isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(TESTIMONIALS[activeIdx].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
              ))}
            </div>
            
            <p className="text-white/80 leading-relaxed mb-4">
              "{TESTIMONIALS[activeIdx].quote}"
            </p>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">{TESTIMONIALS[activeIdx].author}</p>
                <p className="text-sm text-white/50">{TESTIMONIALS[activeIdx].role}</p>
              </div>
              
              {/* Dots */}
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === activeIdx 
                        ? "w-6 bg-white" 
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#0A1628]">
      <BrandPanel />

      {/* Right panel - Form area */}
      <div className="flex flex-1 flex-col min-h-screen">
        {/* Mobile header */}
        <div className="lg:hidden flex items-center justify-between p-6 border-b border-white/[0.06]">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/logo.svg"
              alt={BANK_NAME}
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-lg font-bold text-white">{BANK_NAME}</span>
          </Link>
          <Link 
            href="/"
            className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1"
          >
            Back to home
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Form container */}
        <div className="flex-1 flex items-center justify-center px-6 py-12 lg:py-16">
          <div className="w-full max-w-[420px]">
            {children}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 text-center border-t border-white/[0.06]">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} {BANK_NAME}. All rights reserved.
            <span className="mx-2">•</span>
            <Link href="/privacy" className="hover:text-white/50 transition-colors">Privacy</Link>
            <span className="mx-2">•</span>
            <Link href="/terms" className="hover:text-white/50 transition-colors">Terms</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
