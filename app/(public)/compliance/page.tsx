import { Metadata } from "next"
import Link from "next/link"
import { BANK_NAME, LEGAL_NAME } from "@/lib/brand"
import { 
  Shield, 
  FileText, 
  Scale, 
  Building2,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `Compliance | ${BANK_NAME}`,
  description: `Learn about ${BANK_NAME}'s regulatory compliance, licenses, and commitment to financial regulations.`,
}

const REGULATIONS = [
  {
    title: "Bank Secrecy Act (BSA)",
    description: "We maintain comprehensive anti-money laundering (AML) programs to detect and prevent financial crimes.",
    icon: Shield,
  },
  {
    title: "USA PATRIOT Act",
    description: "We verify customer identities and monitor transactions to prevent terrorism financing.",
    icon: Shield,
  },
  {
    title: "Gramm-Leach-Bliley Act (GLBA)",
    description: "We protect customer financial information and provide privacy notices as required.",
    icon: FileText,
  },
  {
    title: "Electronic Fund Transfer Act (EFTA)",
    description: "We provide disclosures and error resolution procedures for electronic transfers.",
    icon: FileText,
  },
  {
    title: "Truth in Savings Act (TISA)",
    description: "We provide clear disclosures about deposit account terms and interest rates.",
    icon: Scale,
  },
  {
    title: "Fair Credit Reporting Act (FCRA)",
    description: "We handle consumer credit information responsibly and provide required disclosures.",
    icon: Scale,
  },
]

const CERTIFICATIONS = [
  {
    name: "FDIC Member",
    description: "Deposits insured up to $250,000 per depositor",
    icon: Building2,
  },
  {
    name: "SOC 2 Type II",
    description: "Certified security, availability, and confidentiality controls",
    icon: Shield,
  },
  {
    name: "PCI DSS Level 1",
    description: "Highest level of payment card industry compliance",
    icon: CheckCircle,
  },
  {
    name: "ISO 27001",
    description: "International standard for information security management",
    icon: CheckCircle,
  },
]

const COMMITMENTS = [
  {
    title: "Anti-Money Laundering",
    description: "We maintain robust AML programs including customer due diligence, transaction monitoring, and suspicious activity reporting.",
  },
  {
    title: "Know Your Customer",
    description: "We verify the identity of all customers and monitor accounts for unusual activity to prevent fraud and financial crimes.",
  },
  {
    title: "Consumer Protection",
    description: "We comply with all consumer protection regulations and provide clear, transparent information about our products and services.",
  },
  {
    title: "Data Privacy",
    description: "We protect customer data in accordance with applicable privacy laws and maintain strict data security standards.",
  },
  {
    title: "Fair Lending",
    description: "We provide equal access to credit and do not discriminate based on race, color, religion, national origin, sex, marital status, or age.",
  },
  {
    title: "Accessibility",
    description: "We strive to make our services accessible to all customers, including those with disabilities, in compliance with ADA requirements.",
  },
]

export default function CompliancePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00C896]/10 border border-[#00C896]/20 text-[#00C896] text-sm font-medium mb-6">
              <Scale className="w-4 h-4" />
              Regulatory Compliance
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Committed to{" "}
              <span className="text-[#00C896]">compliance</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              {BANK_NAME} is committed to operating in full compliance with all applicable 
              laws and regulations. We maintain the highest standards of integrity and 
              transparency in all our operations.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert) => {
              const Icon = cert.icon
              return (
                <div
                  key={cert.name}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#00C896]/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#00C896]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{cert.name}</h3>
                  <p className="text-white/50 text-sm">{cert.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Regulatory Framework */}
      <section className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Regulatory Framework
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We comply with all applicable federal and state banking regulations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REGULATIONS.map((reg) => {
              const Icon = reg.icon
              return (
                <div
                  key={reg.title}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00C896]/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#00C896]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {reg.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {reg.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Our Commitments
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We go beyond minimum requirements to ensure the highest standards of compliance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMMITMENTS.map((commitment) => (
              <div
                key={commitment.title}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-8 h-8 rounded-lg bg-[#00C896]/20 flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-[#00C896]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {commitment.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Oversight */}
      <section className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
                Regulatory Oversight
              </h2>
              <p className="text-white/60 text-lg mb-6 leading-relaxed">
                {LEGAL_NAME} is subject to examination and supervision by federal and 
                state banking regulators. We maintain open communication with our 
                regulators and promptly address any concerns.
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-white font-medium mb-1">Federal Deposit Insurance Corporation (FDIC)</h4>
                  <p className="text-white/50 text-sm">Primary federal regulator for deposit insurance</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-white font-medium mb-1">State Banking Department</h4>
                  <p className="text-white/50 text-sm">State-level examination and supervision</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-white font-medium mb-1">Consumer Financial Protection Bureau (CFPB)</h4>
                  <p className="text-white/50 text-sm">Consumer protection oversight</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6">Report a Concern</h3>
              <p className="text-white/60 mb-6">
                If you have concerns about our compliance practices or wish to report 
                potential violations, please contact our compliance team.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-white/50 text-sm mb-1">Email</p>
                  <a href="mailto:compliance@securebank.com" className="text-[#00C896] hover:underline">
                    compliance@securebank.com
                  </a>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Phone</p>
                  <a href="tel:+18001234567" className="text-[#00C896] hover:underline">
                    1-800-123-4567
                  </a>
                </div>
                <div>
                  <p className="text-white/50 text-sm mb-1">Mail</p>
                  <p className="text-white/70">
                    Compliance Department<br />
                    123 Financial District<br />
                    New York, NY 10004
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h3 className="text-xl font-semibold text-white mb-6">Related Policies</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/privacy"
              className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00C896]/50 transition-all group"
            >
              <span className="text-white/70 group-hover:text-white transition-colors">Privacy Policy</span>
              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#00C896] transition-colors" />
            </Link>
            <Link
              href="/terms"
              className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00C896]/50 transition-all group"
            >
              <span className="text-white/70 group-hover:text-white transition-colors">Terms of Service</span>
              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#00C896] transition-colors" />
            </Link>
            <Link
              href="/security"
              className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00C896]/50 transition-all group"
            >
              <span className="text-white/70 group-hover:text-white transition-colors">Security</span>
              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#00C896] transition-colors" />
            </Link>
            <Link
              href="/licenses"
              className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00C896]/50 transition-all group"
            >
              <span className="text-white/70 group-hover:text-white transition-colors">Licenses</span>
              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#00C896] transition-colors" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
