import { Metadata } from "next"
import { BANK_NAME, LEGAL_NAME, SUPPORT_EMAIL } from "@/lib/brand"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `Terms of Service | ${BANK_NAME}`,
  description: `Read the terms and conditions for using ${BANK_NAME}'s banking services.`,
}

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Terms of Service
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
              
              {/* Agreement */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Agreement to Terms</h2>
                <p>
                  These Terms of Service ("Terms") constitute a legally binding agreement between 
                  you and {LEGAL_NAME} ("{BANK_NAME}," "we," "our," or "us") governing your access 
                  to and use of our banking services, website, and mobile application.
                </p>
                <p className="mt-4">
                  By opening an account or using our services, you agree to be bound by these Terms. 
                  If you do not agree to these Terms, you may not use our services.
                </p>
              </div>

              {/* Eligibility */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Eligibility</h2>
                <p>To use our services, you must:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Be at least 18 years of age</li>
                  <li>Be a legal resident of the United States</li>
                  <li>Have a valid Social Security Number or Individual Taxpayer Identification Number</li>
                  <li>Have a valid email address and phone number</li>
                  <li>Not be prohibited from using financial services under applicable law</li>
                </ul>
              </div>

              {/* Account Opening */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Account Opening and Verification</h2>
                <p>
                  To open an account, you must provide accurate and complete information. We will 
                  verify your identity in accordance with applicable laws and regulations, including 
                  the USA PATRIOT Act.
                </p>
                <p className="mt-4">
                  You agree to:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Provide truthful, accurate, and complete information</li>
                  <li>Update your information promptly if it changes</li>
                  <li>Cooperate with our identity verification processes</li>
                  <li>Not open accounts for fraudulent purposes</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to refuse to open an account or close an existing account 
                  at our discretion, subject to applicable law.
                </p>
              </div>

              {/* Account Security */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Account Security</h2>
                <p>You are responsible for:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Maintaining the confidentiality of your login credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized access</li>
                  <li>Using strong, unique passwords and enabling two-factor authentication</li>
                </ul>
                <p className="mt-4">
                  We will never ask for your password via email, phone, or text message. 
                  Report any suspicious communications to us immediately.
                </p>
              </div>

              {/* Banking Services */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Banking Services</h2>
                
                <h3 className="text-xl font-medium text-white mt-6 mb-3">Deposit Accounts</h3>
                <p>
                  Your deposits are insured by the Federal Deposit Insurance Corporation (FDIC) 
                  up to $250,000 per depositor, per insured bank, for each account ownership category.
                </p>

                <h3 className="text-xl font-medium text-white mt-6 mb-3">Transactions</h3>
                <p>
                  You authorize us to process transactions you initiate through our services. 
                  You agree to maintain sufficient funds for all transactions. We may refuse 
                  to process transactions that would overdraw your account.
                </p>

                <h3 className="text-xl font-medium text-white mt-6 mb-3">Transfers</h3>
                <p>
                  Transfer limits and processing times may vary. We are not responsible for 
                  delays caused by third parties, including other financial institutions.
                </p>
              </div>

              {/* Fees */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Fees and Charges</h2>
                <p>
                  Our current fee schedule is available on our website and in the mobile app. 
                  We may change our fees with 30 days' notice, except where prohibited by law.
                </p>
                <p className="mt-4">
                  You authorize us to deduct applicable fees from your account. If your account 
                  has insufficient funds, we may decline transactions or close your account.
                </p>
              </div>

              {/* Prohibited Activities */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Prohibited Activities</h2>
                <p>You may not use our services for:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Illegal activities, including money laundering or terrorist financing</li>
                  <li>Fraudulent transactions or identity theft</li>
                  <li>Gambling or adult entertainment (where prohibited)</li>
                  <li>Purchasing illegal goods or services</li>
                  <li>Circumventing our security measures</li>
                  <li>Interfering with our services or other users</li>
                  <li>Violating any applicable laws or regulations</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
                <p>
                  All content, trademarks, logos, and intellectual property related to our 
                  services are owned by {LEGAL_NAME} or our licensors. You may not use, copy, 
                  or distribute our intellectual property without our written permission.
                </p>
              </div>

              {/* Disclaimers */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Disclaimers</h2>
                <p>
                  OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF 
                  ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT OUR SERVICES WILL BE 
                  UNINTERRUPTED, ERROR-FREE, OR SECURE.
                </p>
                <p className="mt-4">
                  We are not responsible for any loss or damage arising from your use of our 
                  services, except as required by applicable law.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, {LEGAL_NAME.toUpperCase()} SHALL NOT BE 
                  LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, 
                  REGARDLESS OF THE CAUSE OF ACTION OR WHETHER WE HAVE BEEN ADVISED OF THE 
                  POSSIBILITY OF SUCH DAMAGES.
                </p>
              </div>

              {/* Dispute Resolution */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Dispute Resolution</h2>
                <p>
                  Any disputes arising from these Terms or your use of our services will be 
                  resolved through binding arbitration in accordance with the rules of the 
                  American Arbitration Association, except where prohibited by law.
                </p>
                <p className="mt-4">
                  You agree to waive your right to participate in class action lawsuits or 
                  class-wide arbitration, to the extent permitted by law.
                </p>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Termination</h2>
                <p>
                  You may close your account at any time by contacting us. We may suspend or 
                  terminate your account if you violate these Terms, engage in suspicious 
                  activity, or as required by law.
                </p>
                <p className="mt-4">
                  Upon termination, you remain responsible for any outstanding obligations, 
                  and certain provisions of these Terms will survive.
                </p>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Changes to Terms</h2>
                <p>
                  We may modify these Terms at any time. We will provide notice of material 
                  changes through our website, app, or email. Your continued use of our 
                  services after changes take effect constitutes acceptance of the new Terms.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Governing Law</h2>
                <p>
                  These Terms are governed by the laws of the State of New York, without 
                  regard to conflict of law principles. Federal law, including the Electronic 
                  Fund Transfer Act and related regulations, also applies.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                <p>
                  If you have questions about these Terms, please contact us:
                </p>
                <div className="mt-4 p-6 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-white font-medium">{LEGAL_NAME}</p>
                  <p className="mt-2">Legal Department</p>
                  <p>123 Financial District</p>
                  <p>New York, NY 10004</p>
                  <p className="mt-2">
                    Email:{" "}
                    <a href="mailto:legal@securebank.com" className="text-[#3B9EFF] hover:underline">
                      legal@securebank.com
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
