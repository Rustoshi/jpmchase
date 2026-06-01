import { Metadata } from "next"
import Link from "next/link"
import { BANK_NAME, LEGAL_NAME } from "@/lib/brand"
import { 
  FileText, 
  Building2, 
  MapPin,
  ArrowRight
} from "lucide-react"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `Licenses | ${BANK_NAME}`,
  description: `View ${BANK_NAME}'s banking licenses and regulatory authorizations.`,
}

const LICENSES = [
  {
    type: "State Banking Charter",
    issuer: "New York State Department of Financial Services",
    number: "License #12345",
    status: "Active",
    issued: "January 15, 2019",
  },
  {
    type: "FDIC Certificate",
    issuer: "Federal Deposit Insurance Corporation",
    number: "Certificate #67890",
    status: "Active",
    issued: "January 15, 2019",
  },
  {
    type: "Money Transmitter License",
    issuer: "California Department of Financial Protection and Innovation",
    number: "License #MT-CA-2019-001",
    status: "Active",
    issued: "March 1, 2019",
  },
  {
    type: "Money Transmitter License",
    issuer: "Texas Department of Banking",
    number: "License #TX-MT-2019-002",
    status: "Active",
    issued: "April 15, 2019",
  },
  {
    type: "Money Transmitter License",
    issuer: "Florida Office of Financial Regulation",
    number: "License #FT-FL-2019-003",
    status: "Active",
    issued: "May 1, 2019",
  },
]

const STATE_LICENSES = [
  { state: "Alabama", status: "Licensed" },
  { state: "Alaska", status: "Licensed" },
  { state: "Arizona", status: "Licensed" },
  { state: "Arkansas", status: "Licensed" },
  { state: "California", status: "Licensed" },
  { state: "Colorado", status: "Licensed" },
  { state: "Connecticut", status: "Licensed" },
  { state: "Delaware", status: "Licensed" },
  { state: "Florida", status: "Licensed" },
  { state: "Georgia", status: "Licensed" },
  { state: "Hawaii", status: "Licensed" },
  { state: "Idaho", status: "Licensed" },
  { state: "Illinois", status: "Licensed" },
  { state: "Indiana", status: "Licensed" },
  { state: "Iowa", status: "Licensed" },
  { state: "Kansas", status: "Licensed" },
  { state: "Kentucky", status: "Licensed" },
  { state: "Louisiana", status: "Licensed" },
  { state: "Maine", status: "Licensed" },
  { state: "Maryland", status: "Licensed" },
  { state: "Massachusetts", status: "Licensed" },
  { state: "Michigan", status: "Licensed" },
  { state: "Minnesota", status: "Licensed" },
  { state: "Mississippi", status: "Licensed" },
  { state: "Missouri", status: "Licensed" },
  { state: "Montana", status: "Exempt" },
  { state: "Nebraska", status: "Licensed" },
  { state: "Nevada", status: "Licensed" },
  { state: "New Hampshire", status: "Licensed" },
  { state: "New Jersey", status: "Licensed" },
  { state: "New Mexico", status: "Licensed" },
  { state: "New York", status: "Licensed" },
  { state: "North Carolina", status: "Licensed" },
  { state: "North Dakota", status: "Licensed" },
  { state: "Ohio", status: "Licensed" },
  { state: "Oklahoma", status: "Licensed" },
  { state: "Oregon", status: "Licensed" },
  { state: "Pennsylvania", status: "Licensed" },
  { state: "Rhode Island", status: "Licensed" },
  { state: "South Carolina", status: "Exempt" },
  { state: "South Dakota", status: "Licensed" },
  { state: "Tennessee", status: "Licensed" },
  { state: "Texas", status: "Licensed" },
  { state: "Utah", status: "Licensed" },
  { state: "Vermont", status: "Licensed" },
  { state: "Virginia", status: "Licensed" },
  { state: "Washington", status: "Licensed" },
  { state: "West Virginia", status: "Licensed" },
  { state: "Wisconsin", status: "Licensed" },
  { state: "Wyoming", status: "Licensed" },
  { state: "District of Columbia", status: "Licensed" },
]

export default function LicensesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B9EFF]/10 border border-[#3B9EFF]/20 text-[#3B9EFF] text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Regulatory Licenses
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Licenses &{" "}
              <span className="text-[#3B9EFF]">Authorizations</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              {LEGAL_NAME} is a licensed financial institution authorized to provide 
              banking services across the United States. View our regulatory licenses 
              and authorizations below.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Licenses */}
      <section className="py-24 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Primary Licenses
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Our core banking and money transmission licenses.
            </p>
          </div>

          <div className="space-y-4">
            {LICENSES.map((license) => (
              <div
                key={license.number}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#3B9EFF]/20 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-[#3B9EFF]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {license.type}
                      </h3>
                      <p className="text-white/50 text-sm mb-2">
                        {license.issuer}
                      </p>
                      <p className="text-white/40 text-sm">
                        {license.number} • Issued {license.issued}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 lg:flex-shrink-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#00C896]/20 text-[#00C896] text-sm font-medium">
                      {license.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* State Licenses */}
      <section className="py-24 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              State Licenses
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              {BANK_NAME} is licensed or exempt to operate in all 50 states and the District of Columbia.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {STATE_LICENSES.map((item) => (
              <div
                key={item.state}
                className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-white/40" />
                  <span className="text-white/70 text-sm">{item.state}</span>
                </div>
                <span className={`text-xs font-medium ${
                  item.status === "Licensed" ? "text-[#00C896]" : "text-[#F59E0B]"
                }`}>
                  {item.status === "Licensed" ? "✓" : "E"}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <span className="text-[#00C896]">✓</span>
              <span>Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#F59E0B]">E</span>
              <span>Exempt</span>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Contact */}
      <section className="py-16 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Questions about our licenses?
                </h3>
                <p className="text-white/60">
                  Contact our compliance team for more information about our regulatory status.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:compliance@securebank.com"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-[#3B9EFF] rounded-xl hover:bg-[#3B9EFF]/90 transition-all"
                >
                  Contact Compliance
                </a>
                <Link
                  href="/compliance"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-all"
                >
                  View Compliance Info
                  <ArrowRight className="w-4 h-4 ml-2" />
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
