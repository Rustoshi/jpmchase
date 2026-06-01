"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { BANK_NAME } from "@/lib/brand"

export function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  return (
    <section ref={sectionRef} className="bg-[#0D1F3C] py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div 
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#3B9EFF] to-[#2563EB] p-10 sm:p-14 lg:p-16 transition-all duration-700 ease-out ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 
              className={`text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 transition-all duration-500 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: inView ? "150ms" : "0ms" }}
            >
              Ready to get started?
            </h2>
            <p 
              className={`text-white/80 text-lg mb-8 transition-all duration-500 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: inView ? "250ms" : "0ms" }}
            >
              Open your {BANK_NAME} account today. It only takes a few minutes.
            </p>
            <div 
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-500 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: inView ? "350ms" : "0ms" }}
            >
              <Link
                href="/register"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#2563EB] bg-white rounded-xl hover:bg-white/90 transition-all duration-200 shadow-lg"
              >
                Create Free Account
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-white border border-white/30 rounded-xl hover:bg-white/10 transition-all duration-200"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
