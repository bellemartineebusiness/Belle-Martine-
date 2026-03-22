export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="bg-surface rounded-lg p-8 md:p-12 space-y-8 text-gray-400">
          <div>
            <p className="text-sm text-gray-500 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="leading-relaxed">
              Welcome to Belle Martinée. By accessing and using our website, you agree to be bound by these
              Terms of Service. Please read them carefully.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing or using the Belle Martinée website and services, you agree to comply with and be
              bound by these Terms of Service and all applicable laws and regulations. If you do not agree
              with any of these terms, you are prohibited from using this site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
            <p className="leading-relaxed mb-3">
              Permission is granted to temporarily download one copy of the materials on Belle Martinée's
              website for personal, non-commercial transitory viewing only. This is the grant of a license,
              not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or public display</li>
              <li>Attempt to decompile or reverse engineer any software on the website</li>
              <li>Remove any copyright or proprietary notations from the materials</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">3. Products and Orders</h2>
            <p className="leading-relaxed mb-3">
              All products are made to order through our fulfillment partners. We strive to display colors
              and images as accurately as possible, but we cannot guarantee that your device's display will
              accurately reflect the actual product colors.
            </p>
            <p className="leading-relaxed">
              We reserve the right to limit quantities, refuse orders, or discontinue products at any time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">4. Pricing and Payment</h2>
            <p className="leading-relaxed mb-3">
              All prices are in USD unless otherwise stated. We reserve the right to change prices at any time
              without notice. The price charged will be the price displayed at the time of order placement.
            </p>
            <p className="leading-relaxed">
              Payment is processed securely through Stripe. By providing payment information, you represent
              that you are authorized to use the payment method.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">5. Shipping and Delivery</h2>
            <p className="leading-relaxed mb-3">
              We ship to addresses worldwide. Shipping times vary based on location and selected shipping
              method. Production typically takes 3-5 business days, with additional time for shipping.
            </p>
            <p className="leading-relaxed">
              We are not responsible for delays caused by customs, weather, or carrier issues beyond our control.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">6. Returns and Refunds</h2>
            <p className="leading-relaxed">
              Please refer to our <a href="/return-policy" className="text-primary hover:text-primary-dark transition-colors">Return Policy</a> for
              detailed information about returns, exchanges, and refunds.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content on this website, including text, graphics, logos, images, and software, is the
              property of Belle Martinée and is protected by copyright, trademark, and other intellectual
              property laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">8. User Account</h2>
            <p className="leading-relaxed mb-3">
              If you create an account on our website, you are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Maintaining the confidentiality of your account information</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
            <p className="leading-relaxed">
              Belle Martinée shall not be liable for any indirect, incidental, special, consequential, or
              punitive damages resulting from your use of or inability to use the service, even if we have
              been advised of the possibility of such damages.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">10. Governing Law</h2>
            <p className="leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of the
              jurisdiction in which Belle Martinée operates, without regard to its conflict of law provisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">11. Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective
              immediately upon posting. Your continued use of the website after changes are posted constitutes
              your acceptance of the modified terms.
            </p>
          </div>

          <div className="border-t border-surface-light pt-6">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <p className="leading-relaxed mb-2">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-primary">
              <a href="mailto:legal@bellemartinee.com" className="hover:text-primary-dark transition-colors">
                legal@bellemartinee.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
