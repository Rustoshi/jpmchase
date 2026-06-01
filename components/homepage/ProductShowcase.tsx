"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Bell, Fingerprint, BarChart3, Zap } from "lucide-react"

const APP_FEATURES = [
  {
    icon: Bell,
    title: "Instant Notifications",
    description: "Get alerts for every transaction, login, and account activity in real time.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Security",
    description: "Log in securely with Face ID, fingerprint, or your preferred method.",
  },
  {
    icon: BarChart3,
    title: "Spending Insights",
    description: "Track your spending patterns and see where your money goes each month.",
  },
  {
    icon: Zap,
    title: "Quick Transfers",
    description: "Send money to anyone in seconds. Schedule payments and set up recurring transfers.",
  },
]

export function ProductShowcase() {
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
      { threshold: 0.2 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  return (
    <section ref={sectionRef} className="bg-[#0A1628] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Phone Mockup */}
          <div 
            className={`relative flex justify-center lg:justify-start order-2 lg:order-1 transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#3B9EFF]/20 rounded-full blur-[100px]" />
              
              {/* Phone mockup */}
              <Image
                src="/images/device-screen.png"
                alt="Secure Bank Mobile App"
                width={320}
                height={640}
                className="relative z-10 w-[260px] sm:w-[300px] lg:w-[320px] h-auto drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div 
            className={`space-y-8 order-1 lg:order-2 transition-all duration-700 ease-out delay-150 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                Banking at your fingertips
              </h2>
              <p className="text-white/60 text-lg max-w-lg">
                Manage your accounts, make payments, and stay on top of your finances from anywhere.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {APP_FEATURES.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div 
                    key={feature.title} 
                    className={`flex gap-4 transition-all duration-500 ease-out ${
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: inView ? `${300 + index * 100}ms` : "0ms" }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA */}
            <div 
              className={`pt-4 transition-all duration-500 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: inView ? "700ms" : "0ms" }}
            >
              <Link
                href="/register"
                className="inline-flex items-center px-6 py-3 text-base font-semibold text-[#0A1628] bg-white rounded-xl hover:bg-white/90 transition-all duration-200"
              >
                Open Your Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
