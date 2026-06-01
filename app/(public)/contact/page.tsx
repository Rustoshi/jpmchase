import { Metadata } from "next"
import Link from "next/link"
import { BANK_NAME, SUPPORT_EMAIL } from "@/lib/brand"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageCircle,
  Building2,
  HelpCircle,
  ArrowRight
} from "lucide-react"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `Contact Us | ${BANK_NAME}`,
  description: `Get in touch with ${BANK_NAME}. We're here to help with any questions about your account, products, or services.`,
}

const CONTACT_METHODS = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team for instant help",
    detail: "Available 24/7",
    action: "Start Chat",
    href: "#chat",
    color: "bg-[#3B9EFF]",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with a support specialist",
    detail: "1-800-123-4567",
    action: "Call Now",
    href: "tel:+18001234567",
    color: "bg-[#00C896]",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a detailed message",
    detail: SUPPORT_EMAIL,
    action: "Send Email",
    href: `mailto:${SUPPORT_EMAIL}`,
    color: "bg-[#8B5CF6]",
  },
]

const OFFICES = [
  {
    city: "Berlin",
    address: "Friedrichstraße 123",
    address2: "10117 Berlin, Germany",
    phone: "+49 30 1234 5678",
    type: "Headquarters",
  },
  {
    city: "Frankfurt",
    address: "Mainzer Landstraße 45",
    address2: "60329 Frankfurt am Main, Germany",
    phone: "+49 69 9876 5432",
    type: "Financial Center",
  },
  {
    city: "Munich",
    address: "Maximilianstraße 78",
    address2: "80539 München, Germany",
    phone: "+49 89 5555 1234",
    type: "Regional Office",
  },
]

const DEPARTMENTS = [
  {
    icon: HelpCircle,
    name: "General Support",
    email: "support@securebank.com",
    description: "Account questions, technical issues, general inquiries",
  },
  {
    icon: Building2,
    name: "Business Banking",
    email: "business@securebank.com",
    description: "Business accounts, commercial services, partnerships",
  },
  {
    icon: MessageCircle,
    name: "Media & Press",
    email: "press@securebank.com",
    description: "Press inquiries, media requests, public relations",
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get in{" "}
              <span className="text-[#3B9EFF]">touch</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Have a question or need assistance? We're here to help. 
              Choose the best way to reach us below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {CONTACT_METHODS.map((method) => {
              const Icon = method.icon
              return (
                <a
                  key={method.title}
                  href={method.href}
                  className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all text-center"
                >
                  <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-4">
                    {method.description}
                  </p>
                  <p className="text-white font-medium mb-6">
                    {method.detail}
                  </p>
                  <span className="inline-flex items-center text-[#3B9EFF] font-medium group-hover:gap-2 transition-all">
                    {method.action}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
                Send us a message
              </h2>
              <p className="text-white/60 text-lg mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              {/* Department Contacts */}
              <div className="space-y-4">
                {DEPARTMENTS.map((dept) => {
                  const Icon = dept.icon
                  return (
                    <div
                      key={dept.name}
                      className="p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-white/70" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{dept.name}</h4>
                          <p className="text-white/50 text-sm mb-1">{dept.description}</p>
                          <a href={`mailto:${dept.email}`} className="text-[#3B9EFF] text-sm hover:underline">
                            {dept.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Form */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-white/70 text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#3B9EFF] focus:ring-1 focus:ring-[#3B9EFF] transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-white/70 text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#3B9EFF] focus:ring-1 focus:ring-[#3B9EFF] transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/70 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#3B9EFF] focus:ring-1 focus:ring-[#3B9EFF] transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-white/70 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#3B9EFF] focus:ring-1 focus:ring-[#3B9EFF] transition-all"
                  >
                    <option value="" className="bg-[#0D1F3C]">Select a topic</option>
                    <option value="account" className="bg-[#0D1F3C]">Account Question</option>
                    <option value="technical" className="bg-[#0D1F3C]">Technical Support</option>
                    <option value="billing" className="bg-[#0D1F3C]">Billing Inquiry</option>
                    <option value="feedback" className="bg-[#0D1F3C]">Feedback</option>
                    <option value="other" className="bg-[#0D1F3C]">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-white/70 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#3B9EFF] focus:ring-1 focus:ring-[#3B9EFF] transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 text-base font-semibold text-white bg-[#3B9EFF] rounded-xl hover:bg-[#3B9EFF]/90 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Our offices
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Visit us at one of our locations around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {OFFICES.map((office) => (
              <div
                key={office.city}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#3B9EFF]/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#3B9EFF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{office.city}</h3>
                    <p className="text-white/50 text-xs">{office.type}</p>
                  </div>
                </div>
                <div className="space-y-2 text-white/60 text-sm">
                  <p>{office.address}</p>
                  <p>{office.address2}</p>
                  <p className="flex items-center gap-2 pt-2">
                    <Phone className="w-4 h-4" />
                    {office.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center">
                <Clock className="w-7 h-7 text-[#F59E0B]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Support Hours</h3>
                <p className="text-white/50">We're here when you need us</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 text-center md:text-left">
              <div>
                <p className="text-white font-medium">Live Chat</p>
                <p className="text-white/50 text-sm">24/7</p>
              </div>
              <div>
                <p className="text-white font-medium">Phone Support</p>
                <p className="text-white/50 text-sm">Mon-Fri, 8am-8pm ET</p>
              </div>
              <div>
                <p className="text-white font-medium">Email Response</p>
                <p className="text-white/50 text-sm">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
