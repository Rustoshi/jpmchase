import { Metadata } from "next"
import Link from "next/link"
import { BANK_NAME } from "@/lib/brand"
import { 
  ArrowRight, 
  Check, 
  Users, 
  Calendar, 
  FileText,
  Shield,
  Zap,
  Calculator,
  Clock,
  DollarSign
} from "lucide-react"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `Payroll Services | ${BANK_NAME}`,
  description: `Automated payroll processing, tax filing, and benefits management. Pay your team on time, every time with ${BANK_NAME}.`,
}

const FEATURES = [
  {
    icon: Zap,
    title: "Automated Payroll",
    description: "Set it and forget it. Payroll runs automatically on your schedule.",
  },
  {
    icon: FileText,
    title: "Tax Filing",
    description: "We calculate, file, and pay your federal, state, and local taxes.",
  },
  {
    icon: Calendar,
    title: "Direct Deposit",
    description: "Employees get paid on time with free direct deposit to any bank.",
  },
  {
    icon: Calculator,
    title: "Deductions & Benefits",
    description: "Manage health insurance, 401(k), and other deductions automatically.",
  },
  {
    icon: Users,
    title: "Employee Self-Service",
    description: "Employees can view pay stubs, W-2s, and update their info online.",
  },
  {
    icon: Shield,
    title: "Compliance Guaranteed",
    description: "Stay compliant with changing tax laws and labor regulations.",
  },
]

const PRICING = [
  {
    name: "Essential",
    price: "$40",
    perEmployee: "+ $6/employee",
    period: "/month",
    description: "For small teams getting started",
    features: [
      "Unlimited payroll runs",
      "Direct deposit",
      "Tax calculations",
      "Basic reporting",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Plus",
    price: "$80",
    perEmployee: "+ $12/employee",
    period: "/month",
    description: "For growing businesses",
    features: [
      "Everything in Essential",
      "Tax filing & payments",
      "Employee self-service",
      "Time tracking integration",
      "Priority support",
      "HR tools",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$135",
    perEmployee: "+ $16/employee",
    period: "/month",
    description: "For businesses with complex needs",
    features: [
      "Everything in Plus",
      "Benefits administration",
      "Workers' comp",
      "Dedicated support",
      "Custom reporting",
      "API access",
    ],
    highlighted: false,
  },
]

const STATS = [
  { value: "10K+", label: "Businesses trust us" },
  { value: "500K+", label: "Employees paid monthly" },
  { value: "99.9%", label: "On-time payroll rate" },
  { value: "$0", label: "Tax penalty guarantee" },
]

export default function PayrollServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Payroll Services
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Payroll that{" "}
              <span className="text-[#F59E0B]">runs itself</span>
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              Automated payroll, tax filing, and benefits management. 
              Pay your team accurately and on time, every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register?type=business"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0A1628] bg-[#F59E0B] rounded-xl hover:bg-[#F59E0B]/90 transition-all"
              >
                Start Free Trial
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

      {/* Features Grid */}
      <section className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Everything you need to pay your team
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              From payroll processing to tax compliance, we handle it all.
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

      {/* How It Works */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              How it works
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Get started in minutes, not days.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-[#F59E0B]/20 flex items-center justify-center mx-auto mb-4 text-[#F59E0B] font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Add Employees</h3>
              <p className="text-white/50 text-sm">
                Enter employee info or import from a spreadsheet.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-[#F59E0B]/20 flex items-center justify-center mx-auto mb-4 text-[#F59E0B] font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Set Schedule</h3>
              <p className="text-white/50 text-sm">
                Choose weekly, bi-weekly, or monthly pay periods.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-[#F59E0B]/20 flex items-center justify-center mx-auto mb-4 text-[#F59E0B] font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Review & Approve</h3>
              <p className="text-white/50 text-sm">
                Review payroll details and approve with one click.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-[#F59E0B]/20 flex items-center justify-center mx-auto mb-4 text-[#F59E0B] font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">We Handle the Rest</h3>
              <p className="text-white/50 text-sm">
                We pay employees and file taxes automatically.
              </p>
            </div>
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
              No hidden fees. Cancel anytime.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {PRICING.map((plan) => (
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
                <div className="mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/50">{plan.period}</span>
                </div>
                <p className="text-white/60 text-sm mb-6">{plan.perEmployee}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-white/70 text-sm">
                      <Check className="w-5 h-5 text-[#F59E0B] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/register?type=business"
                  className={`flex items-center justify-center w-full px-6 py-3 text-base font-semibold rounded-xl transition-all ${
                    plan.highlighted
                      ? "text-white bg-[#F59E0B] hover:bg-[#F59E0B]/90"
                      : "text-white border border-white/20 hover:bg-white/5"
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-white/40 text-sm mt-8">
            All plans include a 30-day free trial. No credit card required.
          </p>
        </div>
      </section>

      {/* Tax Guarantee */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-[#F59E0B]/20 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[#F59E0B]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
                Tax penalty guarantee
              </h2>
              <p className="text-white/60 text-lg mb-6">
                We guarantee accurate tax calculations and on-time filings. 
                If we make a mistake, we'll pay the penalty.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#F59E0B]" />
                  <span className="text-white/70">Automatic tax calculations</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#F59E0B]" />
                  <span className="text-white/70">On-time federal, state, and local filings</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#F59E0B]" />
                  <span className="text-white/70">Year-end W-2 and 1099 preparation</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#F59E0B]" />
                  <span className="text-white/70">Penalty-free guarantee</span>
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
              <DollarSign className="w-16 h-16 text-[#F59E0B] mx-auto mb-4" />
              <p className="text-5xl font-bold text-white mb-2">$0</p>
              <p className="text-white/60 mb-6">Tax penalties, guaranteed</p>
              <p className="text-white/40 text-sm">
                If we make a tax filing error, we'll cover any resulting penalties and interest.
              </p>
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
                Ready to simplify payroll?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Start your free 30-day trial today. No credit card required.
              </p>
              <Link
                href="/register?type=business"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#D97706] bg-white rounded-xl hover:bg-white/90 transition-all shadow-lg"
              >
                Start Free Trial
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
