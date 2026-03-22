export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="bg-surface rounded-lg p-8 md:p-12 space-y-8 text-gray-400">
          <div>
            <p className="text-sm text-gray-500 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="leading-relaxed">
              At Belle Martinée, we take your privacy seriously. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website and make purchases.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
            <p className="leading-relaxed mb-3">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name, email address, and contact information</li>
              <li>Shipping and billing addresses</li>
              <li>Payment information (processed securely by Stripe)</li>
              <li>Order history and preferences</li>
              <li>Communications with us</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="leading-relaxed mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Process and fulfill your orders</li>
              <li>Send order confirmations and shipping updates</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve our website and services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
            <p className="leading-relaxed mb-3">
              We may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Service Providers:</strong> Including Printful (for order fulfillment) and Stripe (for payment processing)</li>
              <li><strong>Shipping Partners:</strong> To deliver your orders</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>
            <p className="leading-relaxed mt-3">
              We do not sell or rent your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal
              information. However, no method of transmission over the internet is 100% secure, and we
              cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p className="leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your information</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
            <p className="leading-relaxed">
              We use cookies and similar technologies to enhance your browsing experience, analyze site
              traffic, and understand where our visitors are coming from. You can control cookies through
              your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
            <p className="leading-relaxed">
              Our services are not directed to individuals under the age of 13. We do not knowingly
              collect personal information from children under 13.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by
              posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </div>

          <div className="border-t border-surface-light pt-6">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="leading-relaxed mb-2">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-primary">
              <a href="mailto:privacy@bellemartinee.com" className="hover:text-primary-dark transition-colors">
                privacy@bellemartinee.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
