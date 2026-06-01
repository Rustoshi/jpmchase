import { Metadata } from "next"
import Link from "next/link"
import { BANK_NAME, LEGAL_NAME } from "@/lib/brand"
import { 
  ArrowRight, 
  Users, 
  Target, 
  Heart,
  Globe,
  Award,
  TrendingUp
} from "lucide-react"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `About Us | ${BANK_NAME}`,
  description: `Learn about ${BANK_NAME}'s mission to make banking simple, secure, and accessible for everyone.`,
}

const VALUES = [
  {
    icon: Users,
    title: "Customer First",
    description: "Every decision we make starts with our customers. We build products that solve real problems and make banking easier.",
  },
  {
    icon: Target,
    title: "Simplicity",
    description: "Banking shouldn't be complicated. We strip away the jargon and complexity to deliver a straightforward experience.",
  },
  {
    icon: Heart,
    title: "Transparency",
    description: "No hidden fees, no surprises. We believe in being upfront about everything, from pricing to how we use your data.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "Everyone deserves access to quality financial services. We're building banking that works for all.",
  },
]

const MILESTONES = [
  { year: "2019", title: "Founded", description: "Started with a mission to reimagine banking" },
  { year: "2020", title: "100K Customers", description: "Reached our first major milestone" },
  { year: "2021", title: "Series B Funding", description: "Raised $50M to accelerate growth" },
  { year: "2022", title: "1M Customers", description: "Crossed one million happy customers" },
  { year: "2023", title: "Business Banking", description: "Launched products for businesses" },
  { year: "2024", title: "Global Expansion", description: "Expanded to serve customers worldwide" },
]

const STATS = [
  { value: "2M+", label: "Customers" },
  { value: "$10B+", label: "Assets managed" },
  { value: "50+", label: "Countries served" },
  { value: "500+", label: "Team members" },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Banking for the{" "}
              <span className="text-[#3B9EFF]">modern world</span>
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              We're on a mission to make banking simple, secure, and accessible for everyone. 
              No hidden fees, no complicated processes, just banking that works.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-3xl font-bold text-[#3B9EFF] mb-1">{stat.value}</p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
                Our story
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  {BANK_NAME} was founded with a simple belief: banking should be easy, 
                  transparent, and accessible to everyone. We saw an industry stuck in the 
                  past, with hidden fees, confusing terms, and outdated technology.
                </p>
                <p>
                  We set out to build something different. A bank that puts customers first, 
                  uses technology to simplify the complex, and treats people with respect.
                </p>
                <p>
                  Today, we serve millions of customers who trust us with their money. 
                  But we're just getting started. Our mission is to build the bank we 
                  always wished existed.
                </p>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-[#3B9EFF]/20 to-[#3B9EFF]/5 flex items-center justify-center">
                <TrendingUp className="w-24 h-24 text-[#3B9EFF]/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Our values
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-[#3B9EFF]/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#3B9EFF]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Our journey
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Key milestones in our mission to transform banking.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-white/10" />
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8">
              {MILESTONES.map((milestone) => (
                <div key={milestone.year} className="relative text-center">
                  <div className="w-16 h-16 rounded-full bg-[#3B9EFF]/20 flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-[#3B9EFF] font-bold">{milestone.year}</span>
                  </div>
                  <h3 className="text-white font-semibold mb-1">{milestone.title}</h3>
                  <p className="text-white/50 text-sm">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Recognition
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We're honored to be recognized for our work.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Best Digital Bank 2024",
              "Top Fintech Startup",
              "Customer Choice Award",
              "Innovation in Banking",
            ].map((award) => (
              <div
                key={award}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
              >
                <Award className="w-10 h-10 text-[#F59E0B] mx-auto mb-4" />
                <p className="text-white font-medium">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#3B9EFF] to-[#2563EB] p-12 lg:p-16 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                Join us on our mission
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Experience banking that puts you first. Open your account today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/register"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#2563EB] bg-white rounded-xl hover:bg-white/90 transition-all shadow-lg"
                >
                  Open Account
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/careers"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white border border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  Join Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
