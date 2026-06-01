import { Metadata } from "next"
import Link from "next/link"
import { BANK_NAME } from "@/lib/brand"
import { Building2, CreditCard, Users, ArrowRight, Shield, BarChart3, Clock, Zap } from "lucide-react"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `Business Banking | ${BANK_NAME}`,
  description: `Business banking solutions for startups, SMBs, and enterprises. Checking, credit, and payroll services with ${BANK_NAME}.`,
}

const PRODUCTS = [
  {
    icon: Building2,
    title: "Business Checking",
    description: "A powerful checking account built for businesses of all sizes with no monthly fees.",
    href: "/business/checking",
    features: ["No monthly fees", "Unlimited transactions", "Multi-user access"],
  },
  {
    icon: CreditCard,
    title: "Business Credit",
    description: "Flexible credit lines and business cards to fuel your growth.",
    href: "/business/credit",
    features: ["Up to $500K credit line", "1.5% cashback", "Expense management"],
  },
  {
    icon: Users,
    title: "Payroll Services",
    description: "Pay your team on time, every time with automated payroll processing.",
    href: "/business/payroll",
    features: ["Direct deposit", "Tax filing", "Benefits management"],
  },
]

const BENEFITS = [
  {
    icon: Zap,
    title: "Fast Onboarding",
    description: "Open your business account in minutes, not days. No branch visits required.",
  },
  {
    icon: BarChart3,
    title: "Financial Insights",
    description: "Real-time dashboards and reports to track your business performance.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption, fraud monitoring, and role-based access controls.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Dedicated business support team available around the clock.",
  },
]

const STATS = [
  { value: "50K+", label: "Businesses served" },
  { value: "$2B+", label: "Processed monthly" },
  { value: "99.9%", label: "Uptime guarantee" },
  { value: "4.9/5", label: "Customer rating" },
]

export default function BusinessBankingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              Business Banking
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Banking built for{" "}
              <span className="text-[#F59E0B]">business</span>
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              From startups to enterprises, we provide the financial tools you need to 
              manage cash flow, pay your team, and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register?type=business"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0A1628] bg-[#F59E0B] rounded-xl hover:bg-[#F59E0B]/90 transition-all"
              >
                Open Business Account
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-all"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-3xl font-bold text-[#F59E0B] mb-1">{stat.value}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Everything your business needs
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Comprehensive financial solutions designed for modern businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => {
              const Icon = product.icon
              return (
                <Link
                  key={product.title}
                  href={product.href}
                  className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#F59E0B]/50 hover:bg-white/[0.07] transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center mb-6 group-hover:bg-[#F59E0B]/30 transition-colors">
                    <Icon className="w-7 h-7 text-[#F59E0B]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#F59E0B] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-white/50 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-white/60 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center text-[#F59E0B] font-medium text-sm group-hover:gap-2 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Why businesses choose us
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We understand what it takes to run a successful business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#F59E0B]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] p-12 lg:p-16 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                Ready to grow your business?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Open your business account today and get the tools you need to succeed.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/register?type=business"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#D97706] bg-white rounded-xl hover:bg-white/90 transition-all shadow-lg"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white border border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
