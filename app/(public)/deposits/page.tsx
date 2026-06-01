import { Metadata } from "next"
import Link from "next/link"
import { BANK_NAME } from "@/lib/brand"
import { 
  ArrowRight, 
  Check, 
  Lock, 
  TrendingUp, 
  Shield,
  Clock,
  Calendar
} from "lucide-react"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `Fixed Deposits & CDs | ${BANK_NAME}`,
  description: `Earn guaranteed returns with fixed deposits and CDs from ${BANK_NAME}. FDIC insured up to $250,000.`,
}

const CD_TERMS = [
  { term: "3 Months", apy: "4.00%", minDeposit: "$500" },
  { term: "6 Months", apy: "4.25%", minDeposit: "$500" },
  { term: "9 Months", apy: "4.50%", minDeposit: "$500" },
  { term: "12 Months", apy: "4.75%", minDeposit: "$500", popular: true },
  { term: "18 Months", apy: "4.50%", minDeposit: "$500" },
  { term: "24 Months", apy: "4.25%", minDeposit: "$500" },
  { term: "36 Months", apy: "4.00%", minDeposit: "$500" },
  { term: "60 Months", apy: "3.75%", minDeposit: "$500" },
]

const FEATURES = [
  {
    icon: TrendingUp,
    title: "Guaranteed Returns",
    description: "Lock in your rate for the full term. No market risk.",
  },
  {
    icon: Shield,
    title: "FDIC Insured",
    description: "Your deposits are protected up to $250,000.",
  },
  {
    icon: Lock,
    title: "Fixed Rate",
    description: "Your APY stays the same for the entire term.",
  },
  {
    icon: Calendar,
    title: "Flexible Terms",
    description: "Choose from 3 months to 5 years.",
  },
]

export default function DepositsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00C896]/10 border border-[#00C896]/20 text-[#00C896] text-sm font-medium mb-6">
              <Lock className="w-4 h-4" />
              Fixed Deposits
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Earn up to{" "}
              <span className="text-[#00C896]">4.75% APY</span>
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              Lock in guaranteed returns with our Certificates of Deposit. 
              FDIC insured up to $250,000 with flexible terms from 3 months to 5 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0A1628] bg-[#00C896] rounded-xl hover:bg-[#00C896]/90 transition-all"
              >
                Open a CD
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="#rates"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-all"
              >
                View Rates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00C896]/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#00C896]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 text-sm">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CD Rates Table */}
      <section id="rates" className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Current CD Rates
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Rates are subject to change. APY accurate as of today.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CD_TERMS.map((cd) => (
              <div
                key={cd.term}
                className={`relative p-6 rounded-2xl border ${
                  cd.popular
                    ? "bg-[#00C896]/10 border-[#00C896]"
                    : "bg-white/5 border-white/10"
                }`}
              >
                {cd.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#00C896] rounded-full text-xs font-semibold text-white">
                    Best Rate
                  </div>
                )}
                <div className="text-center">
                  <p className="text-white/60 text-sm mb-2">{cd.term}</p>
                  <p className={`text-3xl font-bold mb-2 ${cd.popular ? "text-[#00C896]" : "text-white"}`}>
                    {cd.apy}
                  </p>
                  <p className="text-white/40 text-xs mb-4">APY</p>
                  <p className="text-white/50 text-sm">Min: {cd.minDeposit}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/register"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-[#00C896] rounded-xl hover:bg-[#00C896]/90 transition-all"
            >
              Open a CD Account
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              How CDs work
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Simple, straightforward, and secure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-[#00C896]/20 flex items-center justify-center mx-auto mb-4 text-[#00C896] font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Choose Your Term</h3>
              <p className="text-white/50 text-sm">
                Select a term that fits your savings goals, from 3 months to 5 years.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-[#00C896]/20 flex items-center justify-center mx-auto mb-4 text-[#00C896] font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Deposit Your Funds</h3>
              <p className="text-white/50 text-sm">
                Make your initial deposit. Minimum $500 to open.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-[#00C896]/20 flex items-center justify-center mx-auto mb-4 text-[#00C896] font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Earn Guaranteed Interest</h3>
              <p className="text-white/50 text-sm">
                Your rate is locked in. At maturity, withdraw or renew.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0D1F3C]">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-white font-medium mb-2">What happens when my CD matures?</h3>
              <p className="text-white/50 text-sm">
                You'll have a 10-day grace period to withdraw your funds or renew your CD. 
                If you don't take action, your CD will automatically renew at the current rate.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-white font-medium mb-2">Can I withdraw early?</h3>
              <p className="text-white/50 text-sm">
                Yes, but early withdrawal penalties apply. The penalty varies by term length 
                and is typically a portion of the interest earned.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-white font-medium mb-2">Are my deposits insured?</h3>
              <p className="text-white/50 text-sm">
                Yes, all deposits are FDIC insured up to $250,000 per depositor, per insured bank.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#00C896] to-[#059669] p-12 lg:p-16 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                Start earning today
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Lock in a great rate and watch your savings grow.
              </p>
              <Link
                href="/register"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#059669] bg-white rounded-xl hover:bg-white/90 transition-all shadow-lg"
              >
                Open a CD
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
