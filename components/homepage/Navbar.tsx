"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Shield, CreditCard, Wallet, Building2, Users, HelpCircle, Lock } from "lucide-react"
import { BANK_NAME } from "@/lib/brand"

// ── Navigation Links ─────────────────────────────────────────────────────────

const NAV_LINKS = [
  {
    label: "Personal",
    href: "/personal",
    submenu: [
      { label: "Checking Account", href: "/personal/checking", icon: Wallet, desc: "Everyday banking made simple" },
      { label: "Savings Account", href: "/personal/savings", icon: Building2, desc: "Grow your wealth securely" },
      { label: "Credit Cards", href: "/personal/cards", icon: CreditCard, desc: "Rewards that matter" },
    ],
  },
  {
    label: "Business",
    href: "/business",
    submenu: [
      { label: "Business Checking", href: "/business/checking", icon: Building2, desc: "Built for entrepreneurs" },
      { label: "Business Credit", href: "/business/credit", icon: CreditCard, desc: "Flexible financing options" },
      { label: "Payroll Services", href: "/business/payroll", icon: Users, desc: "Pay your team with ease" },
    ],
  },
  {
    label: "Security",
    href: "/security",
    submenu: [
      { label: "How We Protect You", href: "/security/protection", icon: Shield, desc: "Bank-grade security" },
      { label: "Fraud Prevention", href: "/security/fraud", icon: Lock, desc: "24/7 monitoring" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Support", href: "/support", icon: HelpCircle },
]

// ── Navbar Component ─────────────────────────────────────────────────────────

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0A1628]/95 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative hover:scale-105 active:scale-95 transition-transform duration-200">
                <Image
                  src="/images/logo.svg"
                  alt={`${BANK_NAME} Logo`}
                  width={36}
                  height={36}
                  className="w-9 h-9"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {BANK_NAME}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => link.submenu && setActiveSubmenu(link.label)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 px-4 py-2 text-[15px] font-medium text-white/70 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                  >
                    {link.label}
                    {link.submenu && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeSubmenu === link.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.submenu && (
                    <div
                      className={`absolute top-full left-0 pt-2 w-72 transition-all duration-200 ${
                        activeSubmenu === link.label
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="bg-[#0D1F3C]/98 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                        <div className="p-2">
                          {link.submenu.map((item) => {
                            const Icon = item.icon
                            return (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 group/item"
                              >
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover/item:bg-white/15 transition-all duration-200">
                                  <Icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <p className="text-[14px] font-semibold text-white group-hover/item:text-[#3B9EFF] transition-colors duration-200">
                                    {item.label}
                                  </p>
                                  <p className="text-[12px] text-white/50 mt-0.5">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/login"
                className="px-5 py-2.5 text-[14px] font-semibold text-white/80 hover:text-white transition-colors duration-200"
              >
                Log in
              </Link>
              <Link
                href="/register"
                className="px-5 py-2.5 text-[14px] font-semibold text-[#0A1628] bg-white rounded-xl hover:bg-white/90 transition-all duration-200 shadow-md"
              >
                Get started for free
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-white transition-colors active:scale-90"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#0A1628] border-l border-white/10 shadow-2xl transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
              <Image src="/images/logo.svg" alt={BANK_NAME} width={36} height={36} />
              <span className="text-lg font-bold text-white">{BANK_NAME}</span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-white/60 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="p-6 space-y-2 overflow-y-auto max-h-[calc(100vh-200px)]">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {link.submenu ? (
                  <div className="space-y-1">
                    <button
                      onClick={() => setActiveSubmenu(activeSubmenu === link.label ? null : link.label)}
                      className="flex items-center justify-between w-full px-4 py-3 text-[16px] font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          activeSubmenu === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        activeSubmenu === link.label ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-4 space-y-1">
                        {link.submenu.map((item) => {
                          const Icon = item.icon
                          return (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-3 px-4 py-3 text-[14px] text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                            >
                              <Icon className="w-5 h-5 text-[#3B9EFF]" />
                              {item.label}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center px-4 py-3 text-[16px] font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-[#0A1628] space-y-3">
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center w-full px-6 py-3.5 text-[15px] font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/register"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center w-full px-6 py-3.5 text-[15px] font-semibold text-white bg-gradient-to-r from-[#3B9EFF] to-[#00C896] rounded-xl hover:opacity-90 transition-opacity"
            >
              Open Account
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
