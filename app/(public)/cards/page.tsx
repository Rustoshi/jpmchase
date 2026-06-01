import { Metadata } from "next"
import Link from "next/link"
import { BANK_NAME } from "@/lib/brand"
import { 
  ArrowRight, 
  CreditCard, 
  Plane, 
  ShoppingBag, 
  Shield, 
  Percent,
  Check,
  Gift,
  Globe,
  Smartphone
} from "lucide-react"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `Credit Cards | ${BANK_NAME}`,
  description: `Explore credit cards at ${BANK_NAME}. Cashback, travel rewards, and premium benefits with no annual fees.`,
}

const CARDS = [
  {
    name: "Everyday Cashback",
    tagline: "Simple rewards, no hassle",
    color: "from-[#3B9EFF] to-[#2563EB]",
    reward: "1.5%",
    rewardText: "cashback on everything",
    annualFee: "$0",
    features: [
      "1.5% unlimited cashback",
      "No annual fee",
      "No foreign transaction fees",
      "0% intro APR for 15 months",
    ],
    href: "/personal/cards",
    popular: false,
  },
  {
    name: "Premium Rewards",
    tagline: "Maximize your rewards",
    color: "from-[#8B5CF6] to-[#6D28D9]",
    reward: "5%",
    rewardText: "on top categories",
    annualFee: "$0",
    features: [
      "5% on rotating categories",
      "3% on dining & groceries",
      "1% on everything else",
      "Welcome bonus: $200",
    ],
    href: "/personal/cards",
    popular: true,
  },
  {
    name: "Travel Elite",
    tagline: "For the frequent traveler",
    color: "from-[#F59E0B] to-[#D97706]",
    reward: "3X",
    rewardText: "points on travel",
    annualFee: "$95",
    features: [
      "3X points on travel & dining",
      "Airport lounge access",
      "Travel insurance included",
      "No foreign transaction fees",
    ],
    href: "/personal/cards",
    popular: false,
  },
]

const BENEFITS = [
  {
    icon: Shield,
    title: "Zero Liability",
    description: "You're never responsible for unauthorized purchases on your card.",
  },
  {
    icon: Smartphone,
    title: "Instant Notifications",
    description: "Get real-time alerts for every transaction on your card.",
  },
  {
    icon: Globe,
    title: "Worldwide Acceptance",
    description: "Use your card at millions of locations around the world.",
  },
  {
    icon: Gift,
    title: "Exclusive Offers",
    description: "Access special deals and discounts from our merchant partners.",
  },
]

const FEATURES = [
  "No annual fee options",
  "Contactless payments",
  "Virtual card numbers",
  "Freeze card instantly",
  "Custom spending limits",
  "Automatic fraud alerts",
]

export default function CardsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#8B5CF6] text-sm font-medium mb-6">
              <CreditCard className="w-4 h-4" />
              Credit Cards
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Rewards that{" "}
              <span className="text-[#8B5CF6]">add up</span>
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              Earn cashback, travel points, and exclusive perks on every purchase. 
              Find the card that fits your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#8B5CF6] rounded-xl hover:bg-[#8B5CF6]/90 transition-all"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="#cards"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-all"
              >
                Compare Cards
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Grid */}
      <section id="cards" className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Choose your card
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              From everyday cashback to premium travel rewards, we have a card for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {CARDS.map((card) => (
              <div
                key={card.name}
                className={`relative p-8 rounded-2xl border ${
                  card.popular
                    ? "bg-[#8B5CF6]/10 border-[#8B5CF6]"
                    : "bg-white/5 border-white/10"
                }`}
              >
                {card.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#8B5CF6] rounded-full text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}

                {/* Card Visual */}
                <div className={`w-full h-44 rounded-xl bg-gradient-to-br ${card.color} p-6 mb-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <p className="text-white/80 text-sm">{BANK_NAME}</p>
                      <p className="text-white font-semibold text-lg">{card.name}</p>
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-white/60 text-xs">Annual Fee</p>
                        <p className="text-white font-semibold">{card.annualFee}</p>
                      </div>
                      <CreditCard className="w-10 h-10 text-white/30" />
                    </div>
                  </div>
                </div>

                <p className="text-white/50 text-sm mb-4">{card.tagline}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{card.reward}</span>
                  <span className="text-white/60 ml-2">{card.rewardText}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {card.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-white/70 text-sm">
                      <Check className="w-5 h-5 text-[#8B5CF6] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={card.href}
                  className={`flex items-center justify-center w-full px-6 py-3 text-base font-semibold rounded-xl transition-all ${
                    card.popular
                      ? "text-white bg-[#8B5CF6] hover:bg-[#8B5CF6]/90"
                      : "text-white border border-white/20 hover:bg-white/5"
                  }`}
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Every card comes with
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Premium benefits and protections on all our cards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-[#8B5CF6]/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#8B5CF6]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
                Modern card features
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Our cards are designed for the way you live today, with features that 
                give you control and peace of mind.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {FEATURES.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#8B5CF6]" />
                    </div>
                    <span className="text-white/70">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6">
                Apply in minutes
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-white/70">
                  <div className="w-8 h-8 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] font-bold text-sm">1</div>
                  <span>Check if you're pre-approved</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <div className="w-8 h-8 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] font-bold text-sm">2</div>
                  <span>Complete your application</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <div className="w-8 h-8 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] font-bold text-sm">3</div>
                  <span>Get instant decision</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <div className="w-8 h-8 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] font-bold text-sm">4</div>
                  <span>Start using your virtual card</span>
                </div>
              </div>
              <Link
                href="/register"
                className="flex items-center justify-center w-full px-6 py-4 text-base font-semibold text-white bg-[#8B5CF6] rounded-xl hover:bg-[#8B5CF6]/90 transition-all"
              >
                Check Your Eligibility
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <p className="text-white/40 text-xs text-center mt-4">
                No impact on your credit score
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] p-12 lg:p-16 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                Ready to start earning?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Apply now and get instant access to your virtual card.
              </p>
              <Link
                href="/register"
                className="inline-flex items-center px-8 py-4 text-base font-semibold text-[#6D28D9] bg-white rounded-xl hover:bg-white/90 transition-all shadow-lg"
              >
                Apply Now
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
