import { Metadata } from "next"
import Link from "next/link"
import { BANK_NAME } from "@/lib/brand"
import { 
  ArrowRight, 
  Check, 
  Building2, 
  Clock, 
  Percent,
  TrendingUp,
  Shield
} from "lucide-react"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `Business Loans | ${BANK_NAME}`,
  description: `Business loans and lines of credit from ${BANK_NAME}. Flexible financing for your business growth.`,
}

const LOAN_TYPES = [
  {
    title: "Term Loan",
    description: "Fixed-rate loans with predictable monthly payments",
    amount: "Up to $500,000",
    term: "1-5 years",
    rate: "From 7.99% APR",
  },
  {
    title: "Line of Credit",
    description: "Flexible access to funds when you need them",
    amount: "Up to $250,000",
    term: "Revolving",
    rate: "From 8.99% APR",
  },
  {
    title: "SBA Loans",
    description: "Government-backed loans with competitive terms",
    amount: "Up to $5,000,000",
    term: "Up to 25 years",
    rate: "From 6.50% APR",
  },
]

const REQUIREMENTS = [
  "Business operating for 1+ years",
  "Annual revenue of $100,000+",
  "Good personal credit (650+)",
  "US-based business",
]

const USE_CASES = [
  "Working capital",
  "Equipment purchase",
  "Inventory financing",
  "Business expansion",
  "Real estate",
  "Debt refinancing",
]

export default function BusinessLoansPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              Business Loans
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Fuel your business{" "}
              <span className="text-[#F59E0B]">growth</span>
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              Flexible financing solutions to help your business thrive. From term loans 
              to lines of credit, we have options for every stage of growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register?type=business"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0A1628] bg-[#F59E0B] rounded-xl hover:bg-[#F59E0B]/90 transition-all"
              >
                Check Eligibility
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

      {/* Loan Types */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Financing options
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Choose the right financing for your business needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {LOAN_TYPES.map((loan) => (
              <div
                key={loan.title}
                className="p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {loan.title}
                </h3>
                <p className="text-white/50 mb-6">
                  {loan.description}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-white/50">Amount</span>
                    <span className="text-white font-medium">{loan.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Term</span>
                    <span className="text-white font-medium">{loan.term}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Rate</span>
                    <span className="text-[#F59E0B] font-medium">{loan.rate}</span>
                  </div>
                </div>
                <Link
                  href="/register?type=business"
                  className="flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-all"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases & Requirements */}
      <section className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold text-white mb-6">
                Use your funds for
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {USE_CASES.map((useCase) => (
                  <div key={useCase} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#F59E0B]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#F59E0B]" />
                    </div>
                    <span className="text-white/70">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-white mb-6">
                Requirements
              </h2>
              <div className="space-y-4">
                {REQUIREMENTS.map((req) => (
                  <div key={req} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#F59E0B]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#F59E0B]" />
                    </div>
                    <span className="text-white/70">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] p-12 lg:p-16 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                Ready to grow your business?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Check your eligibility in minutes with no impact to your credit score.
              </p>
              <Link
                href="/register?type=business"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#D97706] bg-white rounded-xl hover:bg-white/90 transition-all shadow-lg"
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
