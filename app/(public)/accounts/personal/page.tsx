import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { BANK_NAME } from "@/lib/brand"
import { 
  ArrowRight, 
  Wallet, 
  Building2, 
  CreditCard, 
  Shield, 
  Smartphone, 
  Clock,
  Check,
  TrendingUp,
  Zap
} from "lucide-react"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `Personal Accounts | ${BANK_NAME}`,
  description: `Explore personal banking accounts at ${BANK_NAME}. Checking, savings, credit cards, and more with no hidden fees.`,
}

const ACCOUNT_TYPES = [
  {
    icon: Wallet,
    title: "Everyday Checking",
    description: "Your go-to account for daily transactions with no monthly fees and unlimited transfers.",
    features: ["No monthly fees", "Free ATM access", "Early direct deposit"],
    href: "/personal/checking",
    color: "bg-[#3B9EFF]",
  },
  {
    icon: Building2,
    title: "High-Yield Savings",
    description: "Grow your money faster with one of the highest APYs in the market.",
    features: ["4.50% APY", "No minimum balance", "Automatic savings"],
    href: "/personal/savings",
    color: "bg-[#00C896]",
  },
  {
    icon: CreditCard,
    title: "Credit Cards",
    description: "Earn rewards on every purchase with no annual fees and premium benefits.",
    features: ["Up to 5% cashback", "No annual fee", "Travel perks"],
    href: "/personal/cards",
    color: "bg-[#8B5CF6]",
  },
]

const BENEFITS = [
  {
    icon: Shield,
    title: "FDIC Insured",
    description: "Your deposits are protected up to $250,000 by the Federal Deposit Insurance Corporation.",
  },
  {
    icon: Smartphone,
    title: "Mobile Banking",
    description: "Manage your accounts, pay bills, and send money from anywhere with our award-winning app.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our customer support team is always available to help you with any questions.",
  },
  {
    icon: Zap,
    title: "Instant Transfers",
    description: "Send money to friends and family instantly, any time of day or night.",
  },
]

const COMPARISON = [
  { feature: "Monthly Fee", us: "$0", others: "$12-15" },
  { feature: "ATM Fees", us: "$0 (55,000+ ATMs)", others: "$2.50-5" },
  { feature: "Minimum Balance", us: "$0", others: "$500-1,500" },
  { feature: "Savings APY", us: "4.50%", others: "0.01-0.50%" },
  { feature: "Overdraft Fees", us: "$0 (with protection)", others: "$35" },
  { feature: "Foreign Transaction Fee", us: "$0", others: "1-3%" },
]

export default function PersonalAccountsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B9EFF]/10 border border-[#3B9EFF]/20 text-[#3B9EFF] text-sm font-medium mb-6">
                <Wallet className="w-4 h-4" />
                Personal Banking
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Banking that{" "}
                <span className="text-[#3B9EFF]">works for you</span>
              </h1>
              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                No hidden fees. No minimum balances. Just simple, secure banking 
                designed around your life. Open an account in minutes.
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
                  href="#accounts"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-all"
                >
                  Compare Accounts
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#3B9EFF]/20 rounded-full blur-[100px]" />
                <Image
                  src="/images/device-screen.png"
                  alt="Personal Banking App"
                  width={320}
                  height={640}
                  className="relative z-10 w-[280px] lg:w-[320px] h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-3xl font-bold text-[#3B9EFF] mb-1">$0</p>
              <p className="text-white/60 text-sm">Monthly Fees</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-3xl font-bold text-[#00C896] mb-1">4.50%</p>
              <p className="text-white/60 text-sm">Savings APY</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-3xl font-bold text-white mb-1">55K+</p>
              <p className="text-white/60 text-sm">Free ATMs</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-3xl font-bold text-white mb-1">2M+</p>
              <p className="text-white/60 text-sm">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section id="accounts" className="py-24 bg-[#0D1F3C]">
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
            {ACCOUNT_TYPES.map((account) => {
              const Icon = account.icon
              return (
                <Link
                  key={account.title}
                  href={account.href}
                  className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#3B9EFF]/50 hover:bg-white/[0.07] transition-all duration-300"
                >
                  <div className={`w-14 h-14 ${account.color} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#3B9EFF] transition-colors">
                    {account.title}
                  </h3>
                  <p className="text-white/50 mb-6 leading-relaxed">
                    {account.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {account.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-white/60 text-sm">
                        <Check className="w-4 h-4 text-[#00C896]" />
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

      {/* Comparison Table */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              See how we compare
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We're different from traditional banks. Here's how.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6 text-white/60 font-medium">Feature</th>
                  <th className="text-center py-4 px-6 text-[#3B9EFF] font-semibold">{BANK_NAME}</th>
                  <th className="text-center py-4 px-6 text-white/60 font-medium">Traditional Banks</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.feature} className="border-b border-white/10">
                    <td className="py-4 px-6 text-white/70">{row.feature}</td>
                    <td className="text-center py-4 px-6 text-[#00C896] font-semibold">{row.us}</td>
                    <td className="text-center py-4 px-6 text-white/50">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits */}
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#3B9EFF]" />
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
