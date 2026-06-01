import { Metadata } from "next"
import Link from "next/link"
import { BANK_NAME, SUPPORT_EMAIL } from "@/lib/brand"
import { 
  HelpCircle, 
  Search,
  Wallet,
  CreditCard,
  Shield,
  FileText,
  Users,
  Settings,
  ChevronRight,
  Phone,
  MessageCircle,
  Mail,
  ArrowRight
} from "lucide-react"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `Help Center | ${BANK_NAME}`,
  description: `Find answers to common questions about your ${BANK_NAME} account, cards, payments, and more.`,
}

const CATEGORIES = [
  {
    icon: Wallet,
    title: "Account Management",
    description: "Opening, closing, and managing your accounts",
    articles: 24,
    href: "/help/account",
    topics: ["Open an account", "Close account", "Account settings", "Statements"],
  },
  {
    icon: CreditCard,
    title: "Cards & Payments",
    description: "Debit cards, credit cards, and transactions",
    articles: 31,
    href: "/help/cards",
    topics: ["Activate card", "Report lost card", "Disputes", "Limits"],
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    description: "Protecting your account and data",
    articles: 18,
    href: "/help/security",
    topics: ["Password reset", "Two-factor auth", "Fraud alerts", "Privacy"],
  },
  {
    icon: FileText,
    title: "Statements & Documents",
    description: "Tax forms, statements, and records",
    articles: 12,
    href: "/help/documents",
    topics: ["Download statements", "Tax documents", "Account history"],
  },
  {
    icon: Users,
    title: "Transfers & Payments",
    description: "Sending and receiving money",
    articles: 22,
    href: "/help/transfers",
    topics: ["Wire transfers", "Direct deposit", "Bill pay", "International"],
  },
  {
    icon: Settings,
    title: "App & Technical",
    description: "Mobile app and technical support",
    articles: 15,
    href: "/help/technical",
    topics: ["App issues", "Login problems", "Notifications", "Updates"],
  },
]

const POPULAR_ARTICLES = [
  { title: "How do I reset my password?", href: "/help/password-reset", views: "12.5K" },
  { title: "How do I activate my new card?", href: "/help/card-activation", views: "10.2K" },
  { title: "How do I set up direct deposit?", href: "/help/direct-deposit", views: "8.7K" },
  { title: "How do I dispute a transaction?", href: "/help/dispute-transaction", views: "7.3K" },
  { title: "How do I enable two-factor authentication?", href: "/help/2fa-setup", views: "6.8K" },
  { title: "How do I update my address?", href: "/help/update-address", views: "5.4K" },
  { title: "How do I download my statements?", href: "/help/download-statements", views: "4.9K" },
  { title: "How do I report a lost or stolen card?", href: "/help/lost-card", views: "4.2K" },
]

const QUICK_LINKS = [
  { title: "Reset Password", href: "/help/password-reset", icon: Shield },
  { title: "Activate Card", href: "/help/card-activation", icon: CreditCard },
  { title: "Report Fraud", href: "/security/fraud", icon: Shield },
  { title: "Contact Support", href: "/contact", icon: MessageCircle },
]

export default function HelpCenterPage() {
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
              <span className="text-[#3B9EFF]">help?</span>
            </h1>
            <p className="text-xl text-white/60 mb-8">
              Search our knowledge base or browse categories below.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full pl-14 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#3B9EFF] focus:ring-1 focus:ring-[#3B9EFF] transition-all text-lg"
              />
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              {QUICK_LINKS.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all text-sm"
                  >
                    <Icon className="w-4 h-4" />
                    {link.title}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((category) => {
              const Icon = category.icon
              return (
                <Link
                  key={category.title}
                  href={category.href}
                  className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#3B9EFF]/50 hover:bg-white/[0.07] transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#3B9EFF]/20 flex items-center justify-center group-hover:bg-[#3B9EFF]/30 transition-colors">
                      <Icon className="w-6 h-6 text-[#3B9EFF]" />
                    </div>
                    <span className="text-white/40 text-sm">{category.articles} articles</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#3B9EFF] transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 rounded-md bg-white/5 text-white/50 text-xs"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
                Popular articles
              </h2>
              <p className="text-white/60 text-lg mb-8">
                The most viewed help articles this month.
              </p>
              <div className="space-y-3">
                {POPULAR_ARTICLES.map((article, index) => (
                  <Link
                    key={article.title}
                    href={article.href}
                    className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#3B9EFF]/50 hover:bg-white/[0.07] transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 rounded-lg bg-[#3B9EFF]/20 flex items-center justify-center text-[#3B9EFF] font-semibold text-sm">
                        {index + 1}
                      </span>
                      <span className="text-white/80 group-hover:text-white transition-colors">
                        {article.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-white/40 text-sm hidden sm:block">{article.views} views</span>
                      <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-[#3B9EFF] group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
                Still need help?
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Our support team is available 24/7 to assist you.
              </p>
              <div className="space-y-4">
                <a
                  href="#chat"
                  className="flex items-center gap-4 p-5 rounded-xl bg-[#3B9EFF]/10 border border-[#3B9EFF]/30 hover:bg-[#3B9EFF]/20 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#3B9EFF] flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold">Live Chat</p>
                    <p className="text-white/50 text-sm">Get instant help from our team</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#00C896] text-white text-xs font-medium">
                    Online
                  </span>
                </a>
                <a
                  href="tel:+18001234567"
                  className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white/70" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold">Phone Support</p>
                    <p className="text-white/50 text-sm">1-800-123-4567</p>
                  </div>
                  <span className="text-white/40 text-sm">Mon-Fri, 8am-8pm</span>
                </a>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white/70" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold">Email Support</p>
                    <p className="text-white/50 text-sm">{SUPPORT_EMAIL}</p>
                  </div>
                  <span className="text-white/40 text-sm">Within 24 hours</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Video tutorials
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Watch step-by-step guides on how to use {BANK_NAME}.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Getting Started with Your Account", duration: "3:45" },
              { title: "Setting Up Direct Deposit", duration: "2:30" },
              { title: "Using the Mobile App", duration: "4:15" },
            ].map((video) => (
              <div
                key={video.title}
                className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-[#3B9EFF]/20 to-[#3B9EFF]/5 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium mb-1">{video.title}</h3>
                  <p className="text-white/50 text-sm">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/help/videos"
              className="inline-flex items-center text-[#3B9EFF] font-medium hover:gap-2 transition-all"
            >
              View all tutorials
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
