import Link from "next/link"
import { BANK_NAME } from "@/lib/brand"

// ── Hero Section Component ───────────────────────────────────────────────────

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/customer-support-right-bg.mp4" type="video/mp4" />
        </video>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 lg:pt-40 pb-32 min-h-screen flex items-center">
        <div className="max-w-2xl space-y-8 hero-fade-in">
          {/* Main Headline */}
          <h1 className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-semibold tracking-tight leading-[1.1] text-white">
            Global banking
            <br />
            for the modern world.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/70 max-w-lg leading-relaxed">
            Open accounts, apply for loans and cards, manage deposits, and 
            track all your transactions in one place. Fast verification, 
            real-time notifications, and complete account control.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
            <Link
              href="/login"
              className="inline-flex items-center px-7 py-4 text-base font-semibold text-[#0A1628] bg-white rounded-xl hover:bg-white/90 transition-all duration-200 shadow-lg shadow-black/20"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center px-7 py-4 text-base font-semibold text-white border border-white/30 rounded-xl hover:bg-white/10 transition-all duration-200"
            >
              Create an Account
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A1628] to-transparent z-10 pointer-events-none" />
    </section>
  )
}

// ── Trust Badges Section ─────────────────────────────────────────────────────

export function TrustBadges() {
  return (
    <section className="bg-[#0A1628] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-8">
          <p className="text-white/40 text-sm font-medium tracking-widest uppercase">
            Trusted & Secure
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {/* FDIC Insured */}
            <div className="flex items-center gap-3 text-white/60">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-sm font-medium">FDIC Insured</span>
            </div>

            {/* 256-bit Encryption */}
            <div className="flex items-center gap-3 text-white/60">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <span className="text-sm font-medium">256-bit SSL</span>
            </div>

            {/* PCI DSS Compliant */}
            <div className="flex items-center gap-3 text-white/60">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
              </svg>
              <span className="text-sm font-medium">PCI DSS Compliant</span>
            </div>

            {/* SOC 2 Certified */}
            <div className="flex items-center gap-3 text-white/60">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <span className="text-sm font-medium">SOC 2 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
