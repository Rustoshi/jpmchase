import { Metadata } from "next"
import Link from "next/link"
import { BANK_NAME } from "@/lib/brand"
import { 
  Shield, 
  Lock, 
  Eye, 
  Fingerprint, 
  Bell, 
  Server,
  ArrowRight,
  Check,
  AlertTriangle
} from "lucide-react"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `Security | ${BANK_NAME}`,
  description: `Learn how ${BANK_NAME} protects your money and personal information with bank-grade security, encryption, and 24/7 fraud monitoring.`,
}

const SECURITY_FEATURES = [
  {
    icon: Lock,
    title: "256-bit Encryption",
    description: "All data is encrypted using AES-256, the same standard used by governments and military.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Authentication",
    description: "Log in securely with Face ID, Touch ID, or fingerprint recognition.",
  },
  {
    icon: Eye,
    title: "24/7 Fraud Monitoring",
    description: "Our AI systems monitor transactions around the clock to detect suspicious activity.",
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description: "Get instant notifications for every transaction and login attempt.",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description: "Our systems are hosted in SOC 2 certified data centers with redundant backups.",
  },
  {
    icon: Shield,
    title: "FDIC Insurance",
    description: "Your deposits are insured up to $250,000 by the Federal Deposit Insurance Corporation.",
  },
]

const CERTIFICATIONS = [
  { name: "FDIC Insured", description: "Deposits insured up to $250,000" },
  { name: "SOC 2 Type II", description: "Certified security controls" },
  { name: "PCI DSS", description: "Payment card industry compliant" },
  { name: "ISO 27001", description: "Information security management" },
]

const TIPS = [
  "Never share your password or PIN with anyone",
  "Enable two-factor authentication on your account",
  "Use a unique, strong password for your banking",
  "Review your transactions regularly for unauthorized activity",
  "Be cautious of phishing emails and suspicious links",
  "Keep your contact information up to date",
]

export default function SecurityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00C896]/10 border border-[#00C896]/20 text-[#00C896] text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Security Center
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your security is our{" "}
              <span className="text-[#00C896]">top priority</span>
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              We use industry-leading security measures to protect your money and 
              personal information. Bank with confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/security/protection"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0A1628] bg-[#00C896] rounded-xl hover:bg-[#00C896]/90 transition-all"
              >
                How We Protect You
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/security/fraud"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-all"
              >
                Report Fraud
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              How we keep you safe
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Multiple layers of security protect your account at all times.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SECURITY_FEATURES.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00C896]/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#00C896]" />
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

      {/* Certifications */}
      <section className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Certified and compliant
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We meet the highest industry standards for security and compliance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#00C896]/20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-[#00C896]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{cert.name}</h3>
                <p className="text-white/50 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Tips */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
                Protect yourself
              </h2>
              <p className="text-white/60 text-lg mb-8">
                While we work hard to keep your account secure, there are steps you can 
                take to add an extra layer of protection.
              </p>
              <ul className="space-y-4">
                {TIPS.map((tip) => (
                  <li key={tip} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00C896]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[#00C896]" />
                    </div>
                    <span className="text-white/70">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center">
                  <AlertTriangle className="w-7 h-7 text-[#F59E0B]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Report Suspicious Activity</h3>
                  <p className="text-white/50">We're here to help 24/7</p>
                </div>
              </div>
              <p className="text-white/60 mb-6">
                If you notice any unauthorized transactions or suspicious activity on your 
                account, contact us immediately.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+18001234567"
                  className="flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-white bg-[#F59E0B] rounded-xl hover:bg-[#F59E0B]/90 transition-all"
                >
                  Call 1-800-123-4567
                </a>
                <Link
                  href="/security/fraud"
                  className="flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-all"
                >
                  Report Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#00C896] to-[#059669] p-12 lg:p-16 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                Bank with confidence
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Your money is protected by industry-leading security and FDIC insurance.
              </p>
              <Link
                href="/register"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#059669] bg-white rounded-xl hover:bg-white/90 transition-all shadow-lg"
              >
                Open Your Account
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
