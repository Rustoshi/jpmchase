import { Metadata } from "next"
import { BANK_NAME, LEGAL_NAME, SUPPORT_EMAIL } from "@/lib/brand"
import { Footer } from "@/components/homepage"

export const metadata: Metadata = {
  title: `Cookie Policy | ${BANK_NAME}`,
  description: `Learn how ${BANK_NAME} uses cookies and similar technologies on our website and app.`,
}

export default function CookiePolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#0A1628] to-[#0D1F3C]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Cookie Policy
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
                <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are stored on your device when you visit 
                  a website. They help websites remember your preferences, understand how you 
                  use the site, and improve your experience.
                </p>
                <p className="mt-4">
                  This Cookie Policy explains how {LEGAL_NAME} ("{BANK_NAME}," "we," "our," or "us") 
                  uses cookies and similar technologies on our website and mobile application.
                </p>
              </div>

              {/* Types of Cookies */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-medium text-white mt-6 mb-3">Essential Cookies</h3>
                <p>
                  These cookies are necessary for our website to function properly. They enable 
                  core functionality such as security, account access, and session management. 
                  You cannot opt out of these cookies.
                </p>
                <div className="mt-3 p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-white font-medium mb-2">Examples:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Authentication and session cookies</li>
                    <li>Security cookies (fraud prevention)</li>
                    <li>Load balancing cookies</li>
                  </ul>
                </div>

                <h3 className="text-xl font-medium text-white mt-6 mb-3">Functional Cookies</h3>
                <p>
                  These cookies remember your preferences and choices to provide a more 
                  personalized experience. They may be set by us or third-party providers.
                </p>
                <div className="mt-3 p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-white font-medium mb-2">Examples:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Language and region preferences</li>
                    <li>Display settings (dark/light mode)</li>
                    <li>Recently viewed items</li>
                  </ul>
                </div>

                <h3 className="text-xl font-medium text-white mt-6 mb-3">Analytics Cookies</h3>
                <p>
                  These cookies help us understand how visitors interact with our website by 
                  collecting anonymous information. This helps us improve our services.
                </p>
                <div className="mt-3 p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-white font-medium mb-2">Examples:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Google Analytics</li>
                    <li>Page view and click tracking</li>
                    <li>Error and performance monitoring</li>
                  </ul>
                </div>

                <h3 className="text-xl font-medium text-white mt-6 mb-3">Marketing Cookies</h3>
                <p>
                  These cookies track your activity across websites to deliver relevant 
                  advertisements. They may be set by our advertising partners.
                </p>
                <div className="mt-3 p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-white font-medium mb-2">Examples:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Social media pixels (Facebook, LinkedIn)</li>
                    <li>Retargeting cookies</li>
                    <li>Conversion tracking</li>
                  </ul>
                </div>
              </div>

              {/* Cookie Duration */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Cookie Duration</h2>
                <p>Cookies can be classified by how long they remain on your device:</p>
                
                <h3 className="text-xl font-medium text-white mt-6 mb-3">Session Cookies</h3>
                <p>
                  These cookies are temporary and are deleted when you close your browser. 
                  They are used to maintain your session while you navigate our website.
                </p>

                <h3 className="text-xl font-medium text-white mt-6 mb-3">Persistent Cookies</h3>
                <p>
                  These cookies remain on your device for a set period or until you delete them. 
                  They are used to remember your preferences across visits.
                </p>
              </div>

              {/* Third-Party Cookies */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Cookies</h2>
                <p>
                  Some cookies are placed by third-party services that appear on our pages. 
                  We do not control these cookies and recommend reviewing the privacy policies 
                  of these third parties:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Google Analytics - <a href="https://policies.google.com/privacy" className="text-[#3B9EFF] hover:underline">Privacy Policy</a></li>
                  <li>Intercom - <a href="https://www.intercom.com/legal/privacy" className="text-[#3B9EFF] hover:underline">Privacy Policy</a></li>
                  <li>Stripe - <a href="https://stripe.com/privacy" className="text-[#3B9EFF] hover:underline">Privacy Policy</a></li>
                </ul>
              </div>

              {/* Managing Cookies */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Managing Your Cookie Preferences</h2>
                <p>
                  You have several options for managing cookies:
                </p>

                <h3 className="text-xl font-medium text-white mt-6 mb-3">Browser Settings</h3>
                <p>
                  Most browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>View and delete existing cookies</li>
                  <li>Block all cookies or only third-party cookies</li>
                  <li>Set preferences for specific websites</li>
                  <li>Enable "Do Not Track" signals</li>
                </ul>
                <p className="mt-4">
                  Note: Blocking essential cookies may prevent you from using our services.
                </p>

                <h3 className="text-xl font-medium text-white mt-6 mb-3">Browser-Specific Instructions</h3>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li><a href="https://support.google.com/chrome/answer/95647" className="text-[#3B9EFF] hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-[#3B9EFF] hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" className="text-[#3B9EFF] hover:underline">Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-[#3B9EFF] hover:underline">Microsoft Edge</a></li>
                </ul>

                <h3 className="text-xl font-medium text-white mt-6 mb-3">Opt-Out Tools</h3>
                <p>
                  You can opt out of certain third-party cookies using these tools:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-[#3B9EFF] hover:underline">Google Analytics Opt-Out</a></li>
                  <li><a href="https://optout.networkadvertising.org/" className="text-[#3B9EFF] hover:underline">Network Advertising Initiative</a></li>
                  <li><a href="https://optout.aboutads.info/" className="text-[#3B9EFF] hover:underline">Digital Advertising Alliance</a></li>
                </ul>
              </div>

              {/* Similar Technologies */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Similar Technologies</h2>
                <p>
                  In addition to cookies, we may use other tracking technologies:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li><strong className="text-white">Web Beacons:</strong> Small images that track page views and email opens</li>
                  <li><strong className="text-white">Local Storage:</strong> Data stored in your browser for faster performance</li>
                  <li><strong className="text-white">Device Fingerprinting:</strong> Collecting device characteristics for security</li>
                </ul>
              </div>

              {/* Updates */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time. We will notify you of 
                  any material changes by posting the new policy on this page and updating 
                  the "Last updated" date.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                <p>
                  If you have questions about our use of cookies, please contact us:
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
