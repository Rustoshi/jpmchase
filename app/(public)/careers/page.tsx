import { Metadata } from "next"
import Link from "next/link"
import { BANK_NAME } from "@/lib/brand"
import { 
  ArrowRight, 
  MapPin, 
  Briefcase,
  Heart,
  Zap,
  Users,
  TrendingUp,
  Coffee,
  Plane,
  GraduationCap,
  DollarSign,
  Clock
} from "lucide-react"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `Careers | ${BANK_NAME}`,
  description: `Join the team at ${BANK_NAME}. We're building the future of banking and looking for talented people to help us get there.`,
}

const BENEFITS = [
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description: "Top-of-market compensation with equity options",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive medical, dental, and vision coverage",
  },
  {
    icon: Plane,
    title: "Unlimited PTO",
    description: "Take the time you need to recharge",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description: "$2,000 annual budget for courses and conferences",
  },
  {
    icon: Coffee,
    title: "Remote-First",
    description: "Work from anywhere with flexible hours",
  },
  {
    icon: TrendingUp,
    title: "401(k) Match",
    description: "4% company match on retirement contributions",
  },
]

const VALUES = [
  {
    icon: Users,
    title: "Customer Obsession",
    description: "Every decision starts with our customers. We build products that solve real problems.",
  },
  {
    icon: Zap,
    title: "Move Fast",
    description: "We ship quickly, learn from feedback, and iterate. Speed is a feature.",
  },
  {
    icon: Heart,
    title: "Radical Transparency",
    description: "We share information openly and communicate honestly, even when it's hard.",
  },
]

const OPEN_POSITIONS = [
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    href: "/careers/senior-software-engineer",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "New York, NY",
    type: "Full-time",
    href: "/careers/product-designer",
  },
  {
    title: "Data Scientist",
    department: "Data",
    location: "Remote",
    type: "Full-time",
    href: "/careers/data-scientist",
  },
  {
    title: "Customer Success Manager",
    department: "Operations",
    location: "San Francisco, CA",
    type: "Full-time",
    href: "/careers/customer-success-manager",
  },
  {
    title: "Compliance Analyst",
    department: "Legal & Compliance",
    location: "New York, NY",
    type: "Full-time",
    href: "/careers/compliance-analyst",
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    href: "/careers/marketing-manager",
  },
]

const DEPARTMENTS = [
  { name: "Engineering", count: 12 },
  { name: "Product", count: 5 },
  { name: "Design", count: 4 },
  { name: "Marketing", count: 6 },
  { name: "Operations", count: 8 },
  { name: "Legal & Compliance", count: 3 },
]

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#8B5CF6] text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              We're Hiring
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Build the future of{" "}
              <span className="text-[#8B5CF6]">banking</span>
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              Join a team of passionate people working to make banking simple, 
              secure, and accessible for everyone.
            </p>
            <Link
              href="#positions"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#8B5CF6] rounded-xl hover:bg-[#8B5CF6]/90 transition-all"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-3xl font-bold text-[#8B5CF6] mb-1">500+</p>
              <p className="text-white/60 text-sm">Team Members</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-3xl font-bold text-[#8B5CF6] mb-1">30+</p>
              <p className="text-white/60 text-sm">Countries</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-3xl font-bold text-[#8B5CF6] mb-1">4.8</p>
              <p className="text-white/60 text-sm">Glassdoor Rating</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-3xl font-bold text-[#8B5CF6] mb-1">38</p>
              <p className="text-white/60 text-sm">Open Positions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Our values
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              The principles that guide how we work together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#8B5CF6]/20 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-[#8B5CF6]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Benefits & perks
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We take care of our team so they can take care of our customers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#8B5CF6]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-white/50 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar - Departments */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4">Departments</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#8B5CF6]/20 text-[#8B5CF6] font-medium">
                  All Positions
                  <span className="text-sm">38</span>
                </button>
                {DEPARTMENTS.map((dept) => (
                  <button
                    key={dept.name}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-white/60 hover:bg-white/5 transition-colors"
                  >
                    {dept.name}
                    <span className="text-sm">{dept.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Job Listings */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-semibold text-white">
                  Open positions
                </h2>
                <p className="text-white/50">38 roles available</p>
              </div>

              <div className="space-y-4">
                {OPEN_POSITIONS.map((job) => (
                  <Link
                    key={job.title}
                    href={job.href}
                    className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#8B5CF6]/50 hover:bg-white/[0.07] transition-all"
                  >
                    <div className="mb-4 sm:mb-0">
                      <h3 className="text-lg font-semibold text-white group-hover:text-[#8B5CF6] transition-colors mb-1">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-white/50 text-sm">
                        <span>{job.department}</span>
                        <span className="w-1 h-1 rounded-full bg-white/30" />
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-white/30" />
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-[#8B5CF6] group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/careers/all"
                  className="inline-flex items-center text-[#8B5CF6] font-medium hover:gap-2 transition-all"
                >
                  View all 38 positions
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] p-12 lg:p-16 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                Don't see the right role?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                We're always looking for talented people. Send us your resume and we'll 
                reach out when we have a role that fits.
              </p>
              <Link
                href="mailto:careers@securebank.com"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#6D28D9] bg-white rounded-xl hover:bg-white/90 transition-all shadow-lg"
              >
                Send Your Resume
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
