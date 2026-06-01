"use client"

import { useEffect, useRef, useState } from "react"
import { UserPlus, ShieldCheck, Wallet, ArrowRightLeft } from "lucide-react"

const STEPS = [
  {
    step: 1,
    icon: UserPlus,
    title: "Create Account",
    description: "Sign up in minutes with just your email and phone number.",
  },
  {
    step: 2,
    icon: ShieldCheck,
    title: "Verify Identity",
    description: "Complete KYC with a quick document upload.",
  },
  {
    step: 3,
    icon: Wallet,
    title: "Fund Account",
    description: "Add money via transfer, card, or direct deposit.",
  },
  {
    step: 4,
    icon: ArrowRightLeft,
    title: "Start Banking",
    description: "Send, receive, and manage your money instantly.",
  },
]

export function HowItWorks() {
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
    <section ref={sectionRef} className="bg-[#0D1F3C] py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Get started in 4 simple steps
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Opening an account takes just a few minutes. No paperwork, no branch visits.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-[2px] bg-white/10" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {STEPS.map((item, index) => {
              const Icon = item.icon
              return (
                <div 
                  key={item.step} 
                  className={`relative text-center transition-all duration-600 ease-out ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: inView ? `${index * 150}ms` : "0ms" }}
                >
                  {/* Step number + Icon */}
                  <div className="relative inline-flex flex-col items-center">
                    <div className={`w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative z-10 transition-transform duration-500 ${
                      inView ? "scale-100" : "scale-75"
                    }`}
                    style={{ transitionDelay: inView ? `${index * 150 + 100}ms` : "0ms" }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    {/* Step number badge */}
                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#3B9EFF] flex items-center justify-center text-sm font-bold text-white z-20 transition-all duration-300 ${
                      inView ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                    style={{ transitionDelay: inView ? `${index * 150 + 200}ms` : "0ms" }}
                    >
                      {item.step}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-[200px] mx-auto">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
