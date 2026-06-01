import { Metadata } from "next"
import Link from "next/link"
import { BANK_NAME } from "@/lib/brand"
import { 
  ArrowRight, 
  Check, 
  Building2, 
  Users, 
  CreditCard, 
  BarChart3,
  Shield,
  Zap,
  Globe,
  Receipt
} from "lucide-react"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `Business Checking Account | ${BANK_NAME}`,
  description: `Open a free business checking account with ${BANK_NAME}. No monthly fees, unlimited transactions, and powerful financial tools.`,
}

const FEATURES = [
  {
    icon: Building2,
    title: "No Monthly Fees",
    description: "Keep more of your revenue. No minimum balance requirements or hidden charges.",
  },
  {
    icon: Zap,
    title: "Unlimited Transactions",
    description: "Process as many transactions as you need without per-transaction fees.",
  },
  {
    icon: Users,
    title: "Multi-User Access",
    description: "Add team members with customizable permissions and spending limits.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track cash flow, expenses, and revenue with powerful dashboards.",
  },
  {
    icon: Globe,
    title: "International Payments",
    description: "Send and receive payments in 30+ currencies at competitive rates.",
  },
  {
    icon: Receipt,
    title: "Expense Management",
    description: "Categorize expenses automatically and export for accounting.",
  },
]

const PLANS = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "Perfect for freelancers and small businesses",
    features: [
      "No monthly fees",
      "Unlimited transactions",
      "1 user included",
      "Basic analytics",
      "Email support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$25",
    period: "/month",
    description: "For growing businesses with a team",
    features: [
      "Everything in Starter",
      "Up to 5 users",
      "Advanced analytics",
      "API access",
      "Priority support",
      "Custom cards",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with complex needs",
    features: [
      "Everything in Growth",
      "Unlimited users",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "On-premise options",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export default function BusinessCheckingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              Business Checking
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              A checking account{" "}
              <span className="text-[#F59E0B]">built for business</span>
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              Manage your business finances with powerful tools, no monthly fees, 
              and unlimited transactions. Open your account in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register?type=business"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0A1628] bg-[#F59E0B] rounded-xl hover:bg-[#F59E0B]/90 transition-all"
              >
                Open Account
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-all"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Everything you need to run your business
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Powerful features designed for modern businesses.
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
                  <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#F59E0B]" />
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

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Choose the plan that fits your business. Upgrade or downgrade anytime.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-2xl ${
                  plan.highlighted
                    ? "bg-[#F59E0B]/10 border-2 border-[#F59E0B]"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#F59E0B] rounded-full text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/50 text-sm">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/50">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-white/70 text-sm">
                      <Check className="w-5 h-5 text-[#F59E0B] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.name === "Enterprise" ? "/contact" : "/register?type=business"}
                  className={`flex items-center justify-center w-full px-6 py-3 text-base font-semibold rounded-xl transition-all ${
                    plan.highlighted
                      ? "text-white bg-[#F59E0B] hover:bg-[#F59E0B]/90"
                      : "text-white border border-white/20 hover:bg-white/5"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-[#F59E0B]/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-[#F59E0B]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Enterprise-grade security
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Your business funds are protected with bank-grade encryption, FDIC insurance 
              up to $250,000, and 24/7 fraud monitoring.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <Shield className="w-5 h-5 text-[#F59E0B]" />
                <span className="text-white/70 text-sm font-medium">FDIC Insured</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <Shield className="w-5 h-5 text-[#F59E0B]" />
                <span className="text-white/70 text-sm font-medium">SOC 2 Certified</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <Shield className="w-5 h-5 text-[#F59E0B]" />
                <span className="text-white/70 text-sm font-medium">PCI Compliant</span>
              </div>
            </div>
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
                Open your business account today
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Get started in minutes. No paperwork, no branch visits required.
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
