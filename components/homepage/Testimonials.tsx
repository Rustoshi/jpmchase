"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "Small Business Owner",
    initials: "SM",
    quote: "Managing my business finances has never been easier. The instant notifications keep me on top of every transaction.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Freelance Designer",
    initials: "DC",
    quote: "I switched from my traditional bank and haven't looked back. The app is intuitive and transfers are instant.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    initials: "ER",
    quote: "The spending insights helped me save more each month. Best banking decision I've made.",
    rating: 5,
  },
]

export function Testimonials() {
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
    <section ref={sectionRef} className="bg-[#0A1628] py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-600 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            What our customers say
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their finances.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`p-6 rounded-2xl bg-white/5 border border-white/10 transition-all duration-600 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: inView ? `${150 + index * 100}ms` : "0ms" }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FBBF24] text-[#FBBF24]" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-white/80 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              
              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#3B9EFF]/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-[#3B9EFF]">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{testimonial.name}</p>
                  <p className="text-white/50 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
