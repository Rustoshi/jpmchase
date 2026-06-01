import { Metadata } from "next"
import Link from "next/link"
import { BANK_NAME, SUPPORT_EMAIL } from "@/lib/brand"
import { 
  AlertTriangle, 
  Phone, 
  Mail, 
  Shield,
  ArrowRight,
  Check,
  Lock,
  Eye,
  CreditCard
} from "lucide-react"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `Fraud Prevention & Reporting | ${BANK_NAME}`,
  description: `Report suspicious activity and learn how to protect yourself from fraud. ${BANK_NAME} is here to help 24/7.`,
}

const FRAUD_TYPES = [
  {
    icon: Mail,
    title: "Phishing Scams",
    description: "Fraudulent emails or messages pretending to be from us, asking for your login credentials or personal information.",
    warning: "We will never ask for your password via email or text.",
  },
  {
    icon: CreditCard,
    title: "Card Fraud",
    description: "Unauthorized transactions on your debit or credit card from stolen card information.",
    warning: "Review your transactions regularly and report any you don't recognize.",
  },
  {
    icon: Lock,
    title: "Account Takeover",
    description: "Someone gains access to your account through stolen credentials or social engineering.",
    warning: "Enable two-factor authentication and use a unique, strong password.",
  },
  {
    icon: Eye,
    title: "Identity Theft",
    description: "Someone uses your personal information to open accounts or make purchases in your name.",
    warning: "Monitor your credit report and be cautious about sharing personal info.",
  },
]

const STEPS_IF_FRAUD = [
  {
    step: 1,
    title: "Contact Us Immediately",
    description: "Call our 24/7 fraud hotline at 1-800-123-4567 or use the in-app chat to report the issue.",
  },
  {
    step: 2,
    title: "Freeze Your Card",
    description: "Use the app to instantly freeze your card and prevent any further unauthorized transactions.",
  },
  {
    step: 3,
    title: "Change Your Password",
    description: "Update your password and enable two-factor authentication if you haven't already.",
  },
  {
    step: 4,
    title: "Review Recent Activity",
    description: "Go through your recent transactions and identify any that you don't recognize.",
  },
  {
    step: 5,
    title: "File a Dispute",
    description: "We'll investigate the fraudulent transactions and work to recover your funds.",
  },
]

export default function FraudPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/20 text-[#EF4444] text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              Fraud Prevention
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Report fraud &{" "}
              <span className="text-[#EF4444]">stay protected</span>
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              If you suspect fraudulent activity on your account, we're here to help 24/7. 
              Learn how to recognize and report fraud.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-[#EF4444]/10 border-y border-[#EF4444]/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#EF4444]/20 flex items-center justify-center">
                <Phone className="w-7 h-7 text-[#EF4444]" />
              </div>
              <div>
                <p className="text-white font-semibold text-lg">24/7 Fraud Hotline</p>
                <p className="text-white/60">Report suspicious activity immediately</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+18001234567"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#EF4444] rounded-xl hover:bg-[#EF4444]/90 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                1-800-123-4567
              </a>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-all"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Security Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Fraud */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Common types of fraud
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Learn to recognize these common fraud tactics to protect yourself.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {FRAUD_TYPES.map((fraud) => {
              const Icon = fraud.icon
              return (
                <div
                  key={fraud.title}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EF4444]/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#EF4444]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {fraud.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {fraud.description}
                  </p>
                  <div className="p-3 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/20">
                    <p className="text-[#F59E0B] text-sm font-medium">
                      ⚠️ {fraud.warning}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What to Do */}
      <section className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              What to do if you're a victim
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Follow these steps immediately if you suspect fraud on your account.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {STEPS_IF_FRAUD.map((item) => (
              <div
                key={item.step}
                className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-[#EF4444]/20 flex items-center justify-center flex-shrink-0 text-[#EF4444] font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Promise */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-[#00C896]/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-[#00C896]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Our protection promise
            </h2>
            <p className="text-white/60 text-lg mb-8">
              You're protected against unauthorized transactions. If fraud occurs on your 
              account, we'll work with you to investigate and recover your funds.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-2xl font-bold text-[#00C896] mb-1">$0</p>
                <p className="text-white/50 text-sm">Liability for unauthorized transactions</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-2xl font-bold text-[#00C896] mb-1">24/7</p>
                <p className="text-white/50 text-sm">Fraud monitoring</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-2xl font-bold text-[#00C896] mb-1">10 days</p>
                <p className="text-white/50 text-sm">Typical investigation time</p>
              </div>
            </div>
            <Link
              href="/security"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#0A1628] bg-[#00C896] rounded-xl hover:bg-[#00C896]/90 transition-all"
            >
              Learn More About Security
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
