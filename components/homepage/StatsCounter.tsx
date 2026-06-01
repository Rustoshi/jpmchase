"use client"

import { useEffect, useRef, useState } from "react"

const STATS = [
  {
    value: 50000,
    suffix: "+",
    prefix: "",
    label: "Active Customers",
  },
  {
    value: 2,
    suffix: "B+",
    prefix: "$",
    label: "Processed Securely",
  },
  {
    value: 99.9,
    suffix: "%",
    prefix: "",
    label: "Platform Reliability",
    decimals: 1,
  },
  {
    value: 24,
    suffix: "/7",
    prefix: "",
    label: "Customer Service",
  },
]

function useCountUp(end: number, duration: number = 2000, decimals: number = 0, start: boolean = false) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!start) return
    
    let startTime: number
    let animationFrame: number
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = easeOut * end
      
      setCount(current)
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }
    
    animationFrame = requestAnimationFrame(animate)
    
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, start])
  
  return decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()
}

function StatItem({ stat, inView }: { stat: typeof STATS[0], inView: boolean }) {
  const displayValue = useCountUp(stat.value, 2000, stat.decimals || 0, inView)
  
  return (
    <div className="text-center">
      <p className="text-4xl sm:text-5xl font-bold text-white mb-2">
        {stat.prefix}{displayValue}{stat.suffix}
      </p>
      <p className="text-white/50 text-sm sm:text-base">
        {stat.label}
      </p>
    </div>
  )
}

export function StatsCounter() {
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
    <section ref={sectionRef} className="bg-[#0A1628] py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
