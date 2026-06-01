import Link from "next/link"
import Image from "next/image"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Shield,
  Lock,
  CreditCard
} from "lucide-react"
import { BANK_NAME, SUPPORT_EMAIL, LEGAL_NAME } from "@/lib/brand"

const FOOTER_LINKS = {
  products: {
    title: "Products",
    links: [
      { label: "Personal Accounts", href: "/accounts/personal" },
      { label: "Business Accounts", href: "/accounts/business" },
      { label: "Credit Cards", href: "/cards" },
      { label: "Personal Loans", href: "/loans/personal" },
      { label: "Business Loans", href: "/loans/business" },
      { label: "Fixed Deposits", href: "/deposits" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Compliance", href: "/compliance" },
      { label: "Licenses", href: "/licenses" },
    ],
  },
}

const SOCIAL_LINKS = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

const TRUST_BADGES = [
  { icon: Shield, label: "FDIC Insured" },
  { icon: Lock, label: "256-bit SSL" },
  { icon: CreditCard, label: "PCI Compliant" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-[#050B15] border-t border-white/5">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-12">
        {/* Top Section: Logo + Newsletter */}
        <div className="grid lg:grid-cols-2 gap-12 pb-12 border-b border-white/10">
          {/* Left: Logo & Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.svg"
                alt={`${BANK_NAME} Logo`}
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-white tracking-tight">
                {BANK_NAME}
              </span>
            </Link>
            <p className="text-white/50 max-w-md leading-relaxed">
              Modern banking for the digital age. We're building the future of finance 
              with security, simplicity, and innovation at our core.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href={`mailto:${SUPPORT_EMAIL}`}
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{SUPPORT_EMAIL}</span>
              </a>
              <a 
                href="tel:+18001234567"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>1-800-123-4567</span>
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <MapPin className="w-5 h-5" />
                <span>Friedrichstraße 123, 10117 Berlin, Germany</span>
              </div>
            </div>
          </div>

          {/* Right: Social Links */}
          <div className="lg:pl-12">
            <h3 className="text-xl font-semibold text-white mb-3">
              Follow us
            </h3>
            <p className="text-white/50 mb-6">
              Stay connected on social media.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Middle Section: Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/10">
          {Object.values(FOOTER_LINKS).map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Trust Badges + Copyright */}
        <div className="pt-8">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            {TRUST_BADGES.map((badge) => {
              const Icon = badge.icon
              return (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10"
                >
                  <Icon className="w-5 h-5 text-[#3B9EFF]" />
                  <span className="text-white/70 text-sm font-medium">{badge.label}</span>
                </div>
              )
            })}
          </div>

          {/* Regulatory Text */}
          <div className="text-center mb-8">
            <p className="text-white/40 text-xs leading-relaxed max-w-4xl mx-auto">
              {LEGAL_NAME} is a licensed financial institution regulated by the Financial Conduct Authority. 
              Your deposits are protected up to $250,000 by the Federal Deposit Insurance Corporation (FDIC). 
              Banking services provided by our partner banks. Investment products are not FDIC insured, 
              not bank guaranteed, and may lose value.
            </p>
          </div>

          {/* Copyright & Bottom Links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
            <p className="text-white/40 text-sm">
              © {currentYear} {BANK_NAME}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-white/40 hover:text-white text-sm transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-white/40 hover:text-white text-sm transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="text-white/40 hover:text-white text-sm transition-colors">
                Cookies
              </Link>
              <Link href="/sitemap" className="text-white/40 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
