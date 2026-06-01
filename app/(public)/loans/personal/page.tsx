import { Metadata } from "next"
import Link from "next/link"
import { BANK_NAME } from "@/lib/brand"
import { 
  ArrowRight, 
  Check, 
  DollarSign, 
  Clock, 
  Percent,
  Calculator,
  Shield
} from "lucide-react"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `Personal Loans | ${BANK_NAME}`,
  description: `Get a personal loan with competitive rates from ${BANK_NAME}. Fast approval, flexible terms.`,
}

const FEATURES = [
  {
    icon: Percent,
    title: "Competitive Rates",
    description: "Fixed rates starting at 6.99% APR for qualified borrowers.",
  },
  {
    icon: DollarSign,
    title: "Borrow Up to $50,000",
    description: "Get the funds you need for any purpose.",
  },
  {
    icon: Clock,
    title: "Fast Funding",
    description: "Receive funds as soon as the next business day.",
  },
  {
    icon: Calculator,
    title: "Flexible Terms",
    description: "Choose repayment terms from 12 to 84 months.",
  },
]

const USE_CASES = [
  "Debt consolidation",
  "Home improvement",
  "Major purchases",
  "Medical expenses",
  "Wedding expenses",
  "Vacation",
]

export default function PersonalLoansPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00C896]/10 border border-[#00C896]/20 text-[#00C896] text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4" />
              Personal Loans
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get the funds you need,{" "}
              <span className="text-[#00C896]">fast</span>
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              Personal loans with competitive rates, no hidden fees, and flexible 
              repayment terms. Check your rate without affecting your credit score.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0A1628] bg-[#00C896] rounded-xl hover:bg-[#00C896]/90 transition-all"
              >
                Check Your Rate
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="#calculator"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-all"
              >
                Calculate Payment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rate Highlight */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <p className="text-3xl font-bold text-[#00C896] mb-2">6.99%</p>
              <p className="text-white/60 text-sm">Starting APR</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <p className="text-3xl font-bold text-white mb-2">$50K</p>
              <p className="text-white/60 text-sm">Maximum Loan</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <p className="text-3xl font-bold text-white mb-2">$0</p>
              <p className="text-white/60 text-sm">Origination Fee</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <p className="text-3xl font-bold text-white mb-2">1 Day</p>
              <p className="text-white/60 text-sm">Funding Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Why choose our personal loans?
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Simple, transparent, and designed with you in mind.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-[#00C896]/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#00C896]" />
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

      {/* Use Cases */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
                Use your loan for anything
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Our personal loans can be used for any purpose. No restrictions.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {USE_CASES.map((useCase) => (
                  <div key={useCase} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00C896]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#00C896]" />
                    </div>
                    <span className="text-white/70">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6">
                Check your rate in minutes
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-white/70">
                  <div className="w-8 h-8 rounded-full bg-[#00C896]/20 flex items-center justify-center text-[#00C896] font-bold text-sm">1</div>
                  <span>Tell us about yourself</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <div className="w-8 h-8 rounded-full bg-[#00C896]/20 flex items-center justify-center text-[#00C896] font-bold text-sm">2</div>
                  <span>See your personalized rate</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <div className="w-8 h-8 rounded-full bg-[#00C896]/20 flex items-center justify-center text-[#00C896] font-bold text-sm">3</div>
                  <span>Get funded as soon as tomorrow</span>
                </div>
              </div>
              <Link
                href="/register"
                className="flex items-center justify-center w-full px-6 py-4 text-base font-semibold text-white bg-[#00C896] rounded-xl hover:bg-[#00C896]/90 transition-all"
              >
                Check Your Rate
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <p className="text-white/40 text-xs text-center mt-4">
                Checking your rate won't affect your credit score
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#00C896] to-[#059669] p-12 lg:p-16 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                Ready to get started?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Check your rate in minutes with no impact to your credit score.
              </p>
              <Link
                href="/register"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#059669] bg-white rounded-xl hover:bg-white/90 transition-all shadow-lg"
              >
                Check Your Rate
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
