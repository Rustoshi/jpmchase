import { Metadata } from "next"
import { BANK_NAME, LEGAL_NAME, SUPPORT_EMAIL } from "@/lib/brand"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `Privacy Policy | ${BANK_NAME}`,
  description: `Learn how ${BANK_NAME} collects, uses, and protects your personal information.`,
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-lg">
            Last updated: March 1, 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#0A1628]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-12 text-white/70 leading-relaxed">
              
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
                <p>
                  {LEGAL_NAME} ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you use our banking services, website, and mobile application.
                </p>
                <p className="mt-4">
                  Please read this privacy policy carefully. By using our services, you consent 
                  to the practices described in this policy.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
                
                <h3 className="text-xl font-medium text-white mt-6 mb-3">Personal Information</h3>
                <p>We may collect the following personal information:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Name, email address, phone number, and mailing address</li>
                  <li>Date of birth and Social Security Number (for identity verification)</li>
                  <li>Government-issued identification documents</li>
                  <li>Employment information and income details</li>
                  <li>Bank account and payment card information</li>
                </ul>

                <h3 className="text-xl font-medium text-white mt-6 mb-3">Financial Information</h3>
                <p>To provide our banking services, we collect:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Transaction history and account balances</li>
                  <li>Credit history and credit scores (with your consent)</li>
                  <li>Information about linked external accounts</li>
                  <li>Payment and transfer details</li>
                </ul>

                <h3 className="text-xl font-medium text-white mt-6 mb-3">Technical Information</h3>
                <p>We automatically collect certain information when you use our services:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Device information (type, operating system, unique identifiers)</li>
                  <li>IP address and location data</li>
                  <li>Browser type and settings</li>
                  <li>Usage data and interaction with our services</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Provide, maintain, and improve our banking services</li>
                  <li>Process transactions and send related information</li>
                  <li>Verify your identity and prevent fraud</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Communicate with you about your account and our services</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Analyze usage patterns to improve user experience</li>
                  <li>Protect the security of our services and users</li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Information Sharing</h2>
                <p>We may share your information with:</p>
                
                <h3 className="text-xl font-medium text-white mt-6 mb-3">Service Providers</h3>
                <p>
                  Third-party companies that help us provide our services, such as payment 
                  processors, identity verification services, and cloud hosting providers.
                </p>

                <h3 className="text-xl font-medium text-white mt-6 mb-3">Financial Partners</h3>
                <p>
                  Banks, card networks, and other financial institutions necessary to 
                  process your transactions and provide our services.
                </p>

                <h3 className="text-xl font-medium text-white mt-6 mb-3">Legal Requirements</h3>
                <p>
                  We may disclose information when required by law, regulation, legal process, 
                  or governmental request, or to protect our rights and safety.
                </p>

                <h3 className="text-xl font-medium text-white mt-6 mb-3">Business Transfers</h3>
                <p>
                  In connection with a merger, acquisition, or sale of assets, your information 
                  may be transferred as part of that transaction.
                </p>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
                <p>
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>256-bit AES encryption for data at rest and in transit</li>
                  <li>Multi-factor authentication for account access</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Employee training on data protection practices</li>
                  <li>SOC 2 Type II certified infrastructure</li>
                </ul>
                <p className="mt-4">
                  While we strive to protect your information, no method of transmission over 
                  the internet is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Delete your personal information (subject to legal requirements)</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent for certain processing activities</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at{" "}
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[#3B9EFF] hover:underline">
                    {SUPPORT_EMAIL}
                  </a>.
                </p>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Cookies and Tracking</h2>
                <p>
                  We use cookies and similar technologies to enhance your experience, 
                  analyze usage, and deliver personalized content. You can manage cookie 
                  preferences through your browser settings.
                </p>
                <p className="mt-4">
                  For more information, please see our{" "}
                  <a href="/cookies" className="text-[#3B9EFF] hover:underline">
                    Cookie Policy
                  </a>.
                </p>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Children's Privacy</h2>
                <p>
                  Our services are not intended for individuals under 18 years of age. 
                  We do not knowingly collect personal information from children. If you 
                  believe we have collected information from a child, please contact us.
                </p>
              </div>

              {/* Changes to This Policy */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you 
                  of any material changes by posting the new policy on this page and updating 
                  the "Last updated" date. Your continued use of our services after changes 
                  constitutes acceptance of the updated policy.
                </p>
              </div>

              {/* Contact Us */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or our privacy practices, 
                  please contact us:
                </p>
                <div className="mt-4 p-6 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-white font-medium">{LEGAL_NAME}</p>
                  <p className="mt-2">Privacy Team</p>
                  <p>123 Financial District</p>
                  <p>New York, NY 10004</p>
                  <p className="mt-2">
                    Email:{" "}
                    <a href="mailto:privacy@securebank.com" className="text-[#3B9EFF] hover:underline">
                      privacy@securebank.com
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
