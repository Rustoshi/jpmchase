import { Metadata } from "next"
import Link from "next/link"
import { BANK_NAME } from "@/lib/brand"
import { 
  ArrowRight, 
  Check, 
  CreditCard, 
  Percent, 
  Plane, 
  ShoppingBag,
  Shield,
  Gift,
  Smartphone,
  Globe
} from "lucide-react"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `Credit Cards | ${BANK_NAME}`,
  description: `Explore our credit cards with cashback rewards, no annual fees, and premium travel benefits. Apply today with ${BANK_NAME}.`,
}

const CARDS = [
  {
    name: "Everyday Rewards",
    tagline: "Best for daily spending",
    color: "from-[#3B9EFF] to-[#2563EB]",
    apr: "15.99% - 23.99%",
    annualFee: "$0",
    rewards: [
      "3% cashback on groceries",
      "2% cashback on gas",
      "1% cashback on everything else",
    ],
    perks: [
      "No annual fee",
      "0% intro APR for 15 months",
      "No foreign transaction fees",
    ],
    featured: false,
  },
  {
    name: "Premium Travel",
    tagline: "Best for frequent travelers",
    color: "from-[#8B5CF6] to-[#6D28D9]",
    apr: "17.99% - 24.99%",
    annualFee: "$95",
    rewards: [
      "5x points on travel",
      "3x points on dining",
      "1x points on everything else",
    ],
    perks: [
      "$200 annual travel credit",
      "Airport lounge access",
      "Travel insurance included",
    ],
    featured: true,
  },
  {
    name: "Cash Back Plus",
    tagline: "Best for maximizing cashback",
    color: "from-[#00C896] to-[#059669]",
    apr: "16.99% - 24.99%",
    annualFee: "$0",
    rewards: [
      "5% cashback on rotating categories",
      "3% cashback on online shopping",
      "1.5% cashback on everything else",
    ],
    perks: [
      "No annual fee",
      "$150 sign-up bonus",
      "Cell phone protection",
    ],
    featured: false,
  },
]

const BENEFITS = [
  {
    icon: Shield,
    title: "Fraud Protection",
    description: "Zero liability for unauthorized purchases. We monitor 24/7.",
  },
  {
    icon: Smartphone,
    title: "Instant Notifications",
    description: "Get alerts for every transaction in real-time.",
  },
  {
    icon: Gift,
    title: "Bonus Rewards",
    description: "Earn extra points on special promotions throughout the year.",
  },
  {
    icon: Globe,
    title: "Worldwide Acceptance",
    description: "Use your card at millions of locations worldwide.",
  },
]

export default function CreditCardsPage() {
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
              <span className="text-[#8B5CF6]">actually matter</span>
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              Earn cashback, travel points, and exclusive perks with every purchase. 
              No annual fees on most cards.
            </p>
            <Link
              href="#cards"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#8B5CF6] rounded-xl hover:bg-[#8B5CF6]/90 transition-all"
            >
              Compare Cards
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Cards Grid */}
      <section id="cards" className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Find your perfect card
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Whether you want cashback, travel rewards, or low interest, we have a card for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {CARDS.map((card) => (
              <div
                key={card.name}
                className={`relative p-8 rounded-2xl bg-white/5 border ${
                  card.featured ? "border-[#8B5CF6]" : "border-white/10"
                }`}
              >
                {card.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#8B5CF6] rounded-full text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}
                
                {/* Card Visual */}
                <div className={`w-full h-44 rounded-xl bg-gradient-to-br ${card.color} p-6 mb-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
                  <div className="relative z-10">
                    <p className="text-white/80 text-sm mb-1">{BANK_NAME}</p>
                    <p className="text-white font-semibold text-lg">{card.name}</p>
                    <div className="absolute bottom-0 right-0">
                      <CreditCard className="w-10 h-10 text-white/30" />
                    </div>
                  </div>
                </div>

                <p className="text-white/50 text-sm mb-4">{card.tagline}</p>
                
                {/* Rewards */}
                <div className="mb-6">
                  <p className="text-white font-semibold mb-3">Rewards</p>
                  <ul className="space-y-2">
                    {card.rewards.map((reward) => (
                      <li key={reward} className="flex items-start gap-2 text-white/60 text-sm">
                        <Check className="w-4 h-4 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                        {reward}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Perks */}
                <div className="mb-6">
                  <p className="text-white font-semibold mb-3">Perks</p>
                  <ul className="space-y-2">
                    {card.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2 text-white/60 text-sm">
                        <Check className="w-4 h-4 text-[#00C896] mt-0.5 flex-shrink-0" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">APR</span>
                    <span className="text-white">{card.apr}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">Annual Fee</span>
                    <span className="text-white">{card.annualFee}</span>
                  </div>
                </div>

                <Link
                  href="/register"
                  className={`flex items-center justify-center w-full px-6 py-3 text-base font-semibold rounded-xl transition-all ${
                    card.featured
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

      {/* Benefits Section */}
      <section className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Every card includes
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Premium benefits that come standard with all our credit cards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
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

      {/* How to Apply */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Apply in minutes
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Get a decision in seconds. No impact on your credit score to check your eligibility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center mx-auto mb-4 text-[#8B5CF6] font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Check Eligibility</h3>
              <p className="text-white/50 text-sm">
                See which cards you qualify for without affecting your credit score.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center mx-auto mb-4 text-[#8B5CF6] font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Apply Online</h3>
              <p className="text-white/50 text-sm">
                Complete your application in just a few minutes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center mx-auto mb-4 text-[#8B5CF6] font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Start Earning</h3>
              <p className="text-white/50 text-sm">
                Get your card and start earning rewards right away.
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
                Ready to earn rewards?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Apply now and start earning on every purchase.
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
