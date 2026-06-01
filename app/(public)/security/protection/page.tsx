import { Metadata } from "next"
import Link from "next/link"
import { BANK_NAME } from "@/lib/brand"
import { 
  Shield, 
  Lock, 
  Eye, 
  Fingerprint, 
  Smartphone,
  Server,
  ArrowRight,
  Check
} from "lucide-react"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `How We Protect You | ${BANK_NAME}`,
  description: `Learn about the security measures ${BANK_NAME} uses to protect your money and personal information.`,
}

const PROTECTION_LAYERS = [
  {
    icon: Lock,
    title: "Data Encryption",
    description: "All data transmitted between your device and our servers is encrypted using TLS 1.3 and AES-256 encryption, the same standards used by governments and financial institutions worldwide.",
    details: [
      "256-bit AES encryption for data at rest",
      "TLS 1.3 for data in transit",
      "End-to-end encryption for sensitive operations",
      "Regular security audits and penetration testing",
    ],
  },
  {
    icon: Fingerprint,
    title: "Multi-Factor Authentication",
    description: "We require multiple forms of verification to ensure only you can access your account, even if your password is compromised.",
    details: [
      "Biometric login (Face ID, Touch ID, Fingerprint)",
      "SMS and email verification codes",
      "Hardware security key support",
      "Trusted device management",
    ],
  },
  {
    icon: Eye,
    title: "Fraud Detection",
    description: "Our AI-powered systems analyze every transaction in real-time to detect and prevent fraudulent activity before it affects your account.",
    details: [
      "Real-time transaction monitoring",
      "Behavioral analysis and anomaly detection",
      "Automatic blocking of suspicious transactions",
      "24/7 fraud investigation team",
    ],
  },
  {
    icon: Smartphone,
    title: "Device Security",
    description: "We monitor the devices you use to access your account and alert you to any unusual login attempts.",
    details: [
      "Device fingerprinting and recognition",
      "Alerts for new device logins",
      "Remote session termination",
      "Automatic logout on inactive sessions",
    ],
  },
  {
    icon: Server,
    title: "Infrastructure Security",
    description: "Our systems are hosted in world-class data centers with multiple layers of physical and digital security.",
    details: [
      "SOC 2 Type II certified data centers",
      "Geographic redundancy and failover",
      "DDoS protection and mitigation",
      "Regular backup and disaster recovery testing",
    ],
  },
  {
    icon: Shield,
    title: "Account Protection",
    description: "Your deposits are protected by FDIC insurance, and we offer additional protections against unauthorized access.",
    details: [
      "FDIC insurance up to $250,000",
      "Zero liability for unauthorized transactions",
      "Account freeze and recovery options",
      "Identity theft protection resources",
    ],
  },
]

export default function ProtectionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00C896]/10 border border-[#00C896]/20 text-[#00C896] text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Security
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              How we{" "}
              <span className="text-[#00C896]">protect you</span>
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              We employ multiple layers of security to keep your money and personal 
              information safe. Here's an in-depth look at how we protect you.
            </p>
          </div>
        </div>
      </section>

      {/* Protection Layers */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-16">
            {PROTECTION_LAYERS.map((layer, index) => {
              const Icon = layer.icon
              return (
                <div
                  key={layer.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 rounded-xl bg-[#00C896]/20 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-[#00C896]" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                      {layer.title}
                    </h2>
                    <p className="text-white/60 text-lg mb-6 leading-relaxed">
                      {layer.description}
                    </p>
                    <ul className="space-y-3">
                      {layer.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#00C896]/20 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-[#00C896]" />
                          </div>
                          <span className="text-white/70">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`p-8 rounded-2xl bg-white/5 border border-white/10 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="aspect-video rounded-xl bg-gradient-to-br from-[#00C896]/20 to-[#00C896]/5 flex items-center justify-center">
                      <Icon className="w-24 h-24 text-[#00C896]/40" />
                    </div>
                  </div>
                </div>
              )
            })}
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
                Questions about security?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Our security team is available 24/7 to answer your questions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#059669] bg-white rounded-xl hover:bg-white/90 transition-all shadow-lg"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/support"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white border border-white/30 rounded-xl hover:bg-white/10 transition-all"
                >
                  Visit Help Center
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
