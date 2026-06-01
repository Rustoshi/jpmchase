import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { BANK_NAME } from "@/lib/brand"
import { 
  ArrowRight, 
  Check, 
  Wallet, 
  CreditCard, 
  Smartphone, 
  Globe, 
  Bell, 
  Shield,
  Zap,
  Receipt
} from "lucide-react"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `Checking Account | ${BANK_NAME}`,
  description: `Open a free checking account with ${BANK_NAME}. No monthly fees, unlimited transactions, and instant notifications.`,
}

const FEATURES = [
  {
    icon: Wallet,
    title: "No Monthly Fees",
    description: "Keep more of your money. No minimum balance requirements or hidden charges.",
  },
  {
    icon: Globe,
    title: "Free ATM Access",
    description: "Withdraw cash from 55,000+ ATMs nationwide with no fees.",
  },
  {
    icon: Zap,
    title: "Instant Transfers",
    description: "Send money to friends and family instantly, 24/7.",
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description: "Get notified instantly for every transaction on your account.",
  },
  {
    icon: CreditCard,
    title: "Free Debit Card",
    description: "Get a contactless debit card with chip security, delivered free.",
  },
  {
    icon: Receipt,
    title: "Early Direct Deposit",
    description: "Get your paycheck up to 2 days early with direct deposit.",
  },
]

const INCLUDED = [
  "No monthly maintenance fees",
  "No minimum balance requirement",
  "Free standard checks",
  "Free online bill pay",
  "Mobile check deposit",
  "Overdraft protection options",
  "Free account alerts",
  "24/7 customer support",
]

export default function CheckingAccountPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B9EFF]/10 border border-[#3B9EFF]/20 text-[#3B9EFF] text-sm font-medium mb-6">
                <Wallet className="w-4 h-4" />
                Personal Checking
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Checking that works{" "}
                <span className="text-[#3B9EFF]">for you</span>
              </h1>
              <p className="text-xl text-white/60 mb-8 leading-relaxed">
                A checking account with no monthly fees, no minimum balance, and all the features 
                you need to manage your money effortlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0A1628] bg-white rounded-xl hover:bg-white/90 transition-all"
                >
                  Open Account
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-all"
                >
                  See Features
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#3B9EFF]/20 rounded-full blur-[100px]" />
                <Image
                  src="/images/device-screen.png"
                  alt="Checking Account App"
                  width={320}
                  height={640}
                  className="relative z-10 w-[280px] lg:w-[320px] h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Everything you need, nothing you don't
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Our checking account is designed to make your daily banking simple and fee-free.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#3B9EFF]/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#3B9EFF]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
                What's included
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Every checking account comes with these features at no extra cost.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {INCLUDED.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#3B9EFF]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#3B9EFF]" />
                    </div>
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#3B9EFF] flex items-center justify-center">
                    <Wallet className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Everyday Checking</h3>
                    <p className="text-white/50">Personal Account</p>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/60">Monthly Fee</span>
                    <span className="text-white font-semibold">$0</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/60">Minimum Balance</span>
                    <span className="text-white font-semibold">$0</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-white/60">ATM Fees</span>
                    <span className="text-white font-semibold">$0</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-white/60">APY on Balance</span>
                    <span className="text-[#3B9EFF] font-semibold">0.50%</span>
                  </div>
                </div>
                <Link
                  href="/register"
                  className="flex items-center justify-center w-full px-6 py-4 text-base font-semibold text-white bg-[#3B9EFF] rounded-xl hover:bg-[#3B9EFF]/90 transition-all"
                >
                  Open Account
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-[#3B9EFF]/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-[#3B9EFF]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Your money is protected
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Your deposits are FDIC insured up to $250,000. We use bank-grade encryption 
              and 24/7 fraud monitoring to keep your account secure.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <Shield className="w-5 h-5 text-[#3B9EFF]" />
                <span className="text-white/70 text-sm font-medium">FDIC Insured</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <Shield className="w-5 h-5 text-[#3B9EFF]" />
                <span className="text-white/70 text-sm font-medium">256-bit SSL</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <Shield className="w-5 h-5 text-[#3B9EFF]" />
                <span className="text-white/70 text-sm font-medium">24/7 Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#3B9EFF] to-[#2563EB] p-12 lg:p-16 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                Open your checking account today
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                It only takes a few minutes. No paperwork, no branch visits required.
              </p>
              <Link
                href="/register"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#2563EB] bg-white rounded-xl hover:bg-white/90 transition-all shadow-lg"
              >
                Get Started
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
