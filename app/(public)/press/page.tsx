import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { BANK_NAME, SUPPORT_EMAIL } from "@/lib/brand"
import { 
  ArrowRight, 
  Download, 
  Mail,
  Calendar,
  ExternalLink,
  FileText,
  Image as ImageIcon
} from "lucide-react"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `Press & Media | ${BANK_NAME}`,
  description: `${BANK_NAME} press releases, media resources, and company news. Contact our press team for inquiries.`,
}

const PRESS_RELEASES = [
  {
    date: "March 15, 2024",
    title: `${BANK_NAME} Raises $100M Series C to Expand Global Operations`,
    excerpt: "Funding will accelerate international expansion and product development as the company crosses 2 million customers.",
    href: "/press/series-c-funding",
  },
  {
    date: "February 28, 2024",
    title: `${BANK_NAME} Launches Business Banking Suite`,
    excerpt: "New suite of products designed for small and medium businesses includes checking, credit, and payroll services.",
    href: "/press/business-banking-launch",
  },
  {
    date: "January 10, 2024",
    title: `${BANK_NAME} Named Best Digital Bank of 2024`,
    excerpt: "Industry recognition for innovation in mobile banking and customer experience.",
    href: "/press/best-digital-bank-2024",
  },
  {
    date: "December 5, 2023",
    title: `${BANK_NAME} Crosses 2 Million Customer Milestone`,
    excerpt: "Rapid growth driven by word-of-mouth and industry-leading customer satisfaction scores.",
    href: "/press/2-million-customers",
  },
  {
    date: "October 20, 2023",
    title: `${BANK_NAME} Introduces High-Yield Savings at 4.50% APY`,
    excerpt: "New savings product offers one of the highest rates in the market with no minimum balance.",
    href: "/press/high-yield-savings",
  },
]

const MEDIA_COVERAGE = [
  {
    outlet: "TechCrunch",
    title: "How this fintech is disrupting traditional banking",
    date: "March 2024",
    href: "#",
  },
  {
    outlet: "Forbes",
    title: "The future of digital banking is here",
    date: "February 2024",
    href: "#",
  },
  {
    outlet: "Bloomberg",
    title: "Neobanks gain ground on traditional institutions",
    date: "January 2024",
    href: "#",
  },
  {
    outlet: "The Wall Street Journal",
    title: "Digital banks see surge in business accounts",
    date: "December 2023",
    href: "#",
  },
]

const BRAND_ASSETS = [
  {
    title: "Logo Package",
    description: "Primary and secondary logos in various formats",
    icon: ImageIcon,
    href: "/press/brand-assets/logos.zip",
  },
  {
    title: "Brand Guidelines",
    description: "Colors, typography, and usage guidelines",
    icon: FileText,
    href: "/press/brand-assets/guidelines.pdf",
  },
  {
    title: "Executive Photos",
    description: "High-resolution photos of leadership team",
    icon: ImageIcon,
    href: "/press/brand-assets/executives.zip",
  },
  {
    title: "Product Screenshots",
    description: "App and web interface screenshots",
    icon: ImageIcon,
    href: "/press/brand-assets/screenshots.zip",
  },
]

const COMPANY_FACTS = [
  { label: "Founded", value: "2019" },
  { label: "Headquarters", value: "New York, NY" },
  { label: "Customers", value: "2M+" },
  { label: "Team Size", value: "500+" },
  { label: "Funding Raised", value: "$200M" },
  { label: "Countries", value: "50+" },
]

export default function PressPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Press &{" "}
              <span className="text-[#3B9EFF]">Media</span>
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              News, press releases, and media resources from {BANK_NAME}. 
              For press inquiries, contact our media team.
            </p>
            <a
              href="mailto:press@securebank.com"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#3B9EFF] rounded-xl hover:bg-[#3B9EFF]/90 transition-all"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Press Team
            </a>
          </div>
        </div>
      </section>

      {/* Company Facts */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {COMPANY_FACTS.map((fact) => (
              <div key={fact.label} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-2xl font-bold text-[#3B9EFF] mb-1">{fact.value}</p>
                <p className="text-white/50 text-sm">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">
              Press Releases
            </h2>
            <Link
              href="/press/all"
              className="hidden sm:inline-flex items-center text-[#3B9EFF] font-medium hover:gap-2 transition-all"
            >
              View all
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="space-y-6">
            {PRESS_RELEASES.map((release) => (
              <Link
                key={release.title}
                href={release.href}
                className="group block p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#3B9EFF]/50 hover:bg-white/[0.07] transition-all"
              >
                <div className="flex items-center gap-2 text-white/50 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {release.date}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-[#3B9EFF] transition-colors mb-2">
                  {release.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {release.excerpt}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/press/all"
              className="inline-flex items-center text-[#3B9EFF] font-medium"
            >
              View all press releases
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              In the News
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Recent media coverage and features about {BANK_NAME}.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEDIA_COVERAGE.map((article) => (
              <a
                key={article.title}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
              >
                <p className="text-[#3B9EFF] font-semibold mb-2">{article.outlet}</p>
                <h3 className="text-white font-medium mb-3 group-hover:text-white/80 transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between text-white/50 text-sm">
                  <span>{article.date}</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Brand Assets
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Download logos, brand guidelines, and media resources.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRAND_ASSETS.map((asset) => {
              const Icon = asset.icon
              return (
                <a
                  key={asset.title}
                  href={asset.href}
                  className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#3B9EFF]/50 hover:bg-white/[0.07] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#3B9EFF]/20 flex items-center justify-center mb-4 group-hover:bg-[#3B9EFF]/30 transition-colors">
                    <Icon className="w-6 h-6 text-[#3B9EFF]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {asset.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-4">
                    {asset.description}
                  </p>
                  <span className="inline-flex items-center text-[#3B9EFF] text-sm font-medium">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Press Inquiries
            </h2>
            <p className="text-white/60 text-lg mb-8">
              For press inquiries, interview requests, or additional information, 
              please contact our media relations team.
            </p>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#3B9EFF] flex items-center justify-center">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">Media Relations</p>
                  <a href="mailto:press@securebank.com" className="text-[#3B9EFF] hover:underline">
                    press@securebank.com
                  </a>
                </div>
              </div>
              <p className="text-white/50 text-sm">
                We typically respond to press inquiries within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
