import Image from "next/image"
import { 
  Wallet, 
  CreditCard, 
  Landmark, 
  PiggyBank, 
  ArrowLeftRight, 
  ShieldCheck 
} from "lucide-react"

const FEATURES = [
  {
    icon: Wallet,
    title: "Accounts",
    description: "Open checking and savings accounts in minutes. Manage multiple accounts from one dashboard.",
  },
  {
    icon: CreditCard,
    title: "Cards",
    description: "Apply for debit and credit cards with competitive rates and instant virtual card access.",
  },
  {
    icon: Landmark,
    title: "Loans",
    description: "Personal and business loans with flexible terms. Quick approval and transparent rates.",
  },
  {
    icon: PiggyBank,
    title: "Deposits",
    description: "Fixed and recurring deposit options to grow your savings with guaranteed returns.",
  },
  {
    icon: ArrowLeftRight,
    title: "Transfers",
    description: "Send money locally or internationally. Fast, secure, and low-fee transfers.",
  },
  {
    icon: ShieldCheck,
    title: "Verification",
    description: "Complete your KYC in minutes. Upload documents and get verified the same day.",
  },
]

export function FeaturesGrid() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image - Next.js Image for optimization */}
      <Image
        src="/images/features.webp"
        alt=""
        fill
        className="object-cover"
        quality={85}
        priority={false}
        sizes="100vw"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[#0A1628]/85" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Everything you need in one place
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Manage your finances with powerful tools designed for simplicity and security.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 group-hover:bg-white/15 transition-colors">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

