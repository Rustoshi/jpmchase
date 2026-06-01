import { Metadata } from "next"
import Link from "next/link"
import { BANK_NAME } from "@/lib/brand"
import { 
  ArrowRight, 
  Check, 
  CreditCard, 
  TrendingUp, 
  Receipt,
  Users,
  Shield,
  Zap,
  PieChart,
  Clock
} from "lucide-react"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `Business Credit & Cards | ${BANK_NAME}`,
  description: `Flexible business credit lines and corporate cards with cashback rewards. Fuel your business growth with ${BANK_NAME}.`,
}

const PRODUCTS = [
  {
    name: "Business Credit Card",
    description: "Earn rewards on every business purchase",
    color: "from-[#F59E0B] to-[#D97706]",
    features: [
      "1.5% cashback on all purchases",
      "No annual fee",
      "Employee cards at no extra cost",
      "Real-time expense tracking",
      "Custom spending limits",
    ],
    highlight: "Up to $50K credit limit",
  },
  {
    name: "Business Line of Credit",
    description: "Flexible funding when you need it",
    color: "from-[#3B9EFF] to-[#2563EB]",
    features: [
      "Credit lines up to $500K",
      "Only pay interest on what you use",
      "No prepayment penalties",
      "Fast approval process",
      "Flexible repayment terms",
    ],
    highlight: "Rates from 8.99% APR",
  },
]

const BENEFITS = [
  {
    icon: Zap,
    title: "Fast Approval",
    description: "Get a decision in minutes, not days. Funding available within 24 hours.",
  },
  {
    icon: PieChart,
    title: "Expense Management",
    description: "Track and categorize expenses automatically with detailed reporting.",
  },
  {
    icon: Users,
    title: "Team Cards",
    description: "Issue cards to employees with custom limits and real-time controls.",
  },
  {
    icon: Receipt,
    title: "Easy Integration",
    description: "Sync with QuickBooks, Xero, and other accounting software.",
  },
]

const REQUIREMENTS = [
  "Business registered for 6+ months",
  "Annual revenue of $50,000+",
  "Good personal credit (650+)",
  "US-based business",
]

export default function BusinessCreditPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] text-sm font-medium mb-6">
              <CreditCard className="w-4 h-4" />
              Business Credit
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Fuel your growth with{" "}
              <span className="text-[#F59E0B]">flexible credit</span>
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              Access the capital you need to grow your business. From credit cards to 
              lines of credit, we have financing options that work for you.
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
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-all"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Choose your financing
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Flexible options to match your business needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {PRODUCTS.map((product) => (
              <div
                key={product.name}
                className="p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                {/* Card Visual */}
                <div className={`w-full h-40 rounded-xl bg-gradient-to-br ${product.color} p-6 mb-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
                  <div className="relative z-10">
                    <p className="text-white/80 text-sm mb-1">{BANK_NAME}</p>
                    <p className="text-white font-semibold text-xl">{product.name}</p>
                    <div className="absolute bottom-0 right-0">
                      <CreditCard className="w-12 h-12 text-white/20" />
                    </div>
                  </div>
                </div>

                <p className="text-white/50 mb-4">{product.description}</p>
                
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F59E0B]/20 text-[#F59E0B] text-sm font-medium mb-6">
                  <TrendingUp className="w-4 h-4" />
                  {product.highlight}
                </div>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-white/70 text-sm">
                      <Check className="w-5 h-5 text-[#F59E0B] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/register?type=business"
                  className="flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-white bg-[#F59E0B] rounded-xl hover:bg-[#F59E0B]/90 transition-all"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Built for modern businesses
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Powerful tools to manage your business spending.
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

      {/* Requirements Section */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
                Simple requirements
              </h2>
              <p className="text-white/60 text-lg mb-8">
                We've streamlined the application process. Here's what you need to qualify:
              </p>
              <ul className="space-y-4">
                {REQUIREMENTS.map((req) => (
                  <li key={req} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#F59E0B]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#F59E0B]" />
                    </div>
                    <span className="text-white/70">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#F59E0B] flex items-center justify-center">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Quick Application</h3>
                  <p className="text-white/50">Get approved in minutes</p>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-white/70">
                  <div className="w-8 h-8 rounded-full bg-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] font-bold text-sm">1</div>
                  <span>Complete online application (5 min)</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <div className="w-8 h-8 rounded-full bg-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] font-bold text-sm">2</div>
                  <span>Instant decision</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <div className="w-8 h-8 rounded-full bg-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] font-bold text-sm">3</div>
                  <span>Access funds within 24 hours</span>
                </div>
              </div>
              <Link
                href="/register?type=business"
                className="flex items-center justify-center w-full px-6 py-4 text-base font-semibold text-white bg-[#F59E0B] rounded-xl hover:bg-[#F59E0B]/90 transition-all"
              >
                Check Your Eligibility
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <p className="text-white/40 text-xs text-center mt-4">
                No impact on your credit score
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-[#F59E0B]/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-[#F59E0B]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Secure and compliant
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Your business data is protected with enterprise-grade security. 
              We're PCI compliant and use bank-level encryption for all transactions.
            </p>
            <Link
              href="/register?type=business"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#0A1628] bg-[#F59E0B] rounded-xl hover:bg-[#F59E0B]/90 transition-all"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
