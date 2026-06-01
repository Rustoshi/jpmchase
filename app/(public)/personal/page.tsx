import { Metadata } from "next"
import Link from "next/link"
import { BANK_NAME } from "@/lib/brand"
import { Wallet, Building2, CreditCard, ArrowRight, Shield, Smartphone, Clock } from "lucide-react"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `Personal Banking | ${BANK_NAME}`,
  description: `Discover personal banking solutions designed for your lifestyle. Checking accounts, savings, and credit cards with ${BANK_NAME}.`,
}

const PRODUCTS = [
  {
    icon: Wallet,
    title: "Checking Account",
    description: "Everyday banking with no monthly fees, unlimited transactions, and instant notifications.",
    href: "/personal/checking",
    features: ["No monthly fees", "Free ATM withdrawals", "Instant transfers"],
  },
  {
    icon: Building2,
    title: "Savings Account",
    description: "Grow your money with competitive interest rates and flexible access to your funds.",
    href: "/personal/savings",
    features: ["High-yield interest", "No minimum balance", "Automatic savings"],
  },
  {
    icon: CreditCard,
    title: "Credit Cards",
    description: "Earn rewards on every purchase with no annual fees and premium benefits.",
    href: "/personal/cards",
    features: ["Cashback rewards", "No annual fee", "Travel perks"],
  },
]

const BENEFITS = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Your money is protected with 256-bit encryption and FDIC insurance up to $250,000.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Banking",
    description: "Manage your accounts, pay bills, and send money from anywhere with our app.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our team is always available to help you with any questions or concerns.",
  },
]

export default function PersonalBankingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Personal Banking,{" "}
              <span className="text-[#3B9EFF]">Reimagined</span>
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              Banking that fits your life. No hidden fees, no minimum balances, 
              just simple and secure financial tools designed for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0A1628] bg-white rounded-xl hover:bg-white/90 transition-all"
              >
                Open an Account
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-all"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Choose the right account for you
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Whether you're saving for the future or managing daily expenses, we have the perfect solution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => {
              const Icon = product.icon
              return (
                <Link
                  key={product.title}
                  href={product.href}
                  className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#3B9EFF]/50 hover:bg-white/[0.07] transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#3B9EFF]/20 flex items-center justify-center mb-6 group-hover:bg-[#3B9EFF]/30 transition-colors">
                    <Icon className="w-7 h-7 text-[#3B9EFF]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#3B9EFF] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-white/50 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-white/60 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3B9EFF]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center text-[#3B9EFF] font-medium text-sm group-hover:gap-2 transition-all">
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
      <section className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Why bank with us?
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We're building banking for the modern world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#3B9EFF] to-[#2563EB] p-12 lg:p-16 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                Ready to get started?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Open your account in minutes. No paperwork, no branch visits.
              </p>
              <Link
                href="/register"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#2563EB] bg-white rounded-xl hover:bg-white/90 transition-all shadow-lg"
              >
                Open Your Account
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
