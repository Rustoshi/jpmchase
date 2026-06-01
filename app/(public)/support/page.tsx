import { Metadata } from "next"
import Link from "next/link"
import { BANK_NAME, SUPPORT_EMAIL } from "@/lib/brand"
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail,
  FileText,
  CreditCard,
  Wallet,
  Shield,
  ArrowRight,
  Search,
  ChevronRight
} from "lucide-react"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `Help & Support | ${BANK_NAME}`,
  description: `Get help with your ${BANK_NAME} account. Browse FAQs, contact support, or find answers to common questions.`,
}

const HELP_CATEGORIES = [
  {
    icon: Wallet,
    title: "Account & Profile",
    description: "Manage your account settings, update personal info, and more.",
    href: "/support/account",
    articles: 24,
  },
  {
    icon: CreditCard,
    title: "Cards & Payments",
    description: "Card activation, payments, transfers, and transaction issues.",
    href: "/support/payments",
    articles: 31,
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description: "Password reset, two-factor authentication, and fraud protection.",
    href: "/support/security",
    articles: 18,
  },
  {
    icon: FileText,
    title: "Statements & Documents",
    description: "Access statements, tax documents, and account records.",
    href: "/support/documents",
    articles: 12,
  },
]

const POPULAR_QUESTIONS = [
  { question: "How do I reset my password?", href: "/support/password-reset" },
  { question: "How do I activate my new card?", href: "/support/card-activation" },
  { question: "How do I set up direct deposit?", href: "/support/direct-deposit" },
  { question: "How do I dispute a transaction?", href: "/support/dispute" },
  { question: "How do I close my account?", href: "/support/close-account" },
  { question: "How do I update my address?", href: "/support/update-address" },
]

const CONTACT_OPTIONS = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team",
    availability: "Available 24/7",
    action: "Start Chat",
    href: "#chat",
    primary: true,
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Call us at 1-800-123-4567",
    availability: "Mon-Fri, 8am-8pm ET",
    action: "Call Now",
    href: "tel:+18001234567",
    primary: false,
  },
  {
    icon: Mail,
    title: "Email Support",
    description: `Email us at ${SUPPORT_EMAIL}`,
    availability: "Response within 24 hours",
    action: "Send Email",
    href: `mailto:${SUPPORT_EMAIL}`,
    primary: false,
  },
]

export default function SupportPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B9EFF]/10 border border-[#3B9EFF]/20 text-[#3B9EFF] text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Help Center
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              How can we{" "}
              <span className="text-[#3B9EFF]">help you?</span>
            </h1>
            <p className="text-xl text-white/60 mb-8">
              Search our help center or browse categories below.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#3B9EFF] focus:ring-1 focus:ring-[#3B9EFF] transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Browse by category
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Find answers organized by topic.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HELP_CATEGORIES.map((category) => {
              const Icon = category.icon
              return (
                <Link
                  key={category.title}
                  href={category.href}
                  className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#3B9EFF]/50 hover:bg-white/[0.07] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#3B9EFF]/20 flex items-center justify-center mb-4 group-hover:bg-[#3B9EFF]/30 transition-colors">
                    <Icon className="w-6 h-6 text-[#3B9EFF]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#3B9EFF] transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-4">
                    {category.description}
                  </p>
                  <p className="text-white/40 text-xs">
                    {category.articles} articles
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
                Popular questions
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Quick answers to the most common questions.
              </p>
              <div className="space-y-3">
                {POPULAR_QUESTIONS.map((item) => (
                  <Link
                    key={item.question}
                    href={item.href}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#3B9EFF]/50 hover:bg-white/[0.07] transition-all group"
                  >
                    <span className="text-white/80 group-hover:text-white transition-colors">
                      {item.question}
                    </span>
                    <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-[#3B9EFF] group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Options */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
                Contact us
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Can't find what you're looking for? We're here to help.
              </p>
              <div className="space-y-4">
                {CONTACT_OPTIONS.map((option) => {
                  const Icon = option.icon
                  return (
                    <a
                      key={option.title}
                      href={option.href}
                      className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                        option.primary
                          ? "bg-[#3B9EFF]/10 border-[#3B9EFF]/30 hover:bg-[#3B9EFF]/20"
                          : "bg-white/5 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        option.primary ? "bg-[#3B9EFF]" : "bg-white/10"
                      }`}>
                        <Icon className={`w-6 h-6 ${option.primary ? "text-white" : "text-white/70"}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold">{option.title}</p>
                        <p className="text-white/50 text-sm">{option.availability}</p>
                      </div>
                      <span className={`px-4 py-2 rounded-lg text-sm font-medium ${
                        option.primary
                          ? "bg-[#3B9EFF] text-white"
                          : "bg-white/10 text-white/70"
                      }`}>
                        {option.action}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 bg-[#EF4444]/10 border-y border-[#EF4444]/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Lost or stolen card?
              </h3>
              <p className="text-white/60">
                Report it immediately to prevent unauthorized use.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+18001234567"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-[#EF4444] rounded-xl hover:bg-[#EF4444]/90 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Emergency Line
              </a>
              <Link
                href="/security/fraud"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-all"
              >
                Report Fraud Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Our support team is available 24/7 to help you with anything you need.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#0A1628] bg-white rounded-xl hover:bg-white/90 transition-all"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
