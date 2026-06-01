import { Metadata } from "next"
import Link from "next/link"
import { BANK_NAME } from "@/lib/brand"
import { 
  ArrowRight, 
  Check, 
  Building2, 
  TrendingUp, 
  PiggyBank, 
  Target,
  Calculator,
  Shield,
  Repeat,
  Lock
} from "lucide-react"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `High-Yield Savings Account | ${BANK_NAME}`,
  description: `Earn more with our high-yield savings account. Competitive APY, no minimum balance, and FDIC insured up to $250,000.`,
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: "High-Yield APY",
    description: "Earn 4.50% APY on your savings, one of the highest rates in the market.",
  },
  {
    icon: PiggyBank,
    title: "No Minimum Balance",
    description: "Start saving with any amount. No minimum deposit required to open.",
  },
  {
    icon: Repeat,
    title: "Automatic Savings",
    description: "Set up recurring transfers to grow your savings automatically.",
  },
  {
    icon: Target,
    title: "Savings Goals",
    description: "Create multiple savings goals and track your progress visually.",
  },
  {
    icon: Calculator,
    title: "Interest Calculator",
    description: "See exactly how much you'll earn with our built-in calculator.",
  },
  {
    icon: Lock,
    title: "Flexible Access",
    description: "Access your money anytime. No lock-in periods or penalties.",
  },
]

const COMPARISON = [
  { bank: BANK_NAME, apy: "4.50%", minBalance: "$0", monthlyFee: "$0", highlight: true },
  { bank: "National Average", apy: "0.46%", minBalance: "Varies", monthlyFee: "Varies", highlight: false },
  { bank: "Big Bank A", apy: "0.01%", minBalance: "$500", monthlyFee: "$5", highlight: false },
  { bank: "Big Bank B", apy: "0.05%", minBalance: "$300", monthlyFee: "$4", highlight: false },
]

export default function SavingsAccountPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00C896]/10 border border-[#00C896]/20 text-[#00C896] text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              High-Yield Savings
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Earn{" "}
              <span className="text-[#00C896]">4.50% APY</span>{" "}
              on your savings
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              Make your money work harder. Our high-yield savings account offers one of the 
              best rates in the market with no fees and no minimum balance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0A1628] bg-[#00C896] rounded-xl hover:bg-[#00C896]/90 transition-all"
              >
                Start Saving
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="#calculator"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-all"
              >
                Calculate Earnings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* APY Highlight */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <p className="text-4xl font-bold text-[#00C896] mb-2">4.50%</p>
              <p className="text-white/60">Annual Percentage Yield</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <p className="text-4xl font-bold text-white mb-2">$0</p>
              <p className="text-white/60">Minimum Balance</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <p className="text-4xl font-bold text-white mb-2">$0</p>
              <p className="text-white/60">Monthly Fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Savings made simple
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              All the tools you need to grow your savings effortlessly.
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
                  <div className="w-12 h-12 rounded-xl bg-[#00C896]/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#00C896]" />
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

      {/* Comparison Table */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              See how we compare
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Our rates beat the national average by over 9x.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6 text-white/60 font-medium">Bank</th>
                  <th className="text-center py-4 px-6 text-white/60 font-medium">APY</th>
                  <th className="text-center py-4 px-6 text-white/60 font-medium">Min Balance</th>
                  <th className="text-center py-4 px-6 text-white/60 font-medium">Monthly Fee</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr 
                    key={row.bank} 
                    className={`border-b border-white/10 ${row.highlight ? "bg-[#00C896]/10" : ""}`}
                  >
                    <td className="py-4 px-6">
                      <span className={`font-semibold ${row.highlight ? "text-[#00C896]" : "text-white/70"}`}>
                        {row.bank}
                      </span>
                    </td>
                    <td className="text-center py-4 px-6">
                      <span className={`font-semibold ${row.highlight ? "text-[#00C896]" : "text-white"}`}>
                        {row.apy}
                      </span>
                    </td>
                    <td className="text-center py-4 px-6 text-white/70">{row.minBalance}</td>
                    <td className="text-center py-4 px-6 text-white/70">{row.monthlyFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
                See your savings grow
              </h2>
              <p className="text-white/60 text-lg mb-8">
                With our high-yield savings account, your money grows faster. 
                Here's what you could earn:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#00C896]" />
                  <span className="text-white/70">$10,000 deposit earns ~$450/year</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#00C896]" />
                  <span className="text-white/70">$25,000 deposit earns ~$1,125/year</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#00C896]" />
                  <span className="text-white/70">$50,000 deposit earns ~$2,250/year</span>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-center mb-8">
                <p className="text-white/60 mb-2">If you save $500/month for 5 years</p>
                <p className="text-5xl font-bold text-[#00C896]">$33,847</p>
                <p className="text-white/50 mt-2">Total balance (including $3,847 in interest)</p>
              </div>
              <Link
                href="/register"
                className="flex items-center justify-center w-full px-6 py-4 text-base font-semibold text-white bg-[#00C896] rounded-xl hover:bg-[#00C896]/90 transition-all"
              >
                Start Saving Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-[#00C896]/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-[#00C896]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Your savings are protected
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Your deposits are FDIC insured up to $250,000. We use bank-grade encryption 
              and never invest your savings in risky assets.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#0A1628] bg-[#00C896] rounded-xl hover:bg-[#00C896]/90 transition-all"
            >
              Open Savings Account
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
