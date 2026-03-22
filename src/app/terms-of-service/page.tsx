export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

        <div className="bg-surface rounded-lg p-8 md:p-12 space-y-8 text-gray-400">
          <div>
            <p className="text-sm text-gray-500 mb-6">Last updated: 2025-01-01</p>
            <p className="leading-relaxed">
              Welcome to Belle Martinée. By accessing and using our website, you agree to be bound by
              these Terms of Service. Please read them carefully before placing an order. If you do not
              agree with any of these terms, please do not use this website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">1. Company Information</h2>
            <address className="not-italic space-y-1 ml-4">
              <p className="font-semibold text-white">Belle Martinée</p>
              <p>Org.nr: [ORGANISATION NUMBER]</p>
              <p>[STREET ADDRESS]</p>
              <p>[POSTAL CODE] [CITY], Sweden</p>
              <p>
                Email:{' '}
                <a href="mailto:info@bellemartinee.com" className="text-primary hover:text-primary-dark transition-colors">
                  info@bellemartinee.com
                </a>
              </p>
              <p>
                Legal:{' '}
                <a href="mailto:legal@bellemartinee.com" className="text-primary hover:text-primary-dark transition-colors">
                  legal@bellemartinee.com
                </a>
              </p>
            </address>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">2. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By placing an order on our website, you confirm that you are at least 18 years old (or have
              parental/guardian consent) and that you agree to these Terms of Service. These terms are
              governed by Swedish law and EU consumer legislation, which grants you statutory rights that
              these terms cannot limit or exclude.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">3. Use Licence</h2>
            <p className="leading-relaxed mb-3">
              Permission is granted to temporarily view the materials on Belle Martinée&apos;s website for
              personal, non-commercial purposes only. Under this licence you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or public display</li>
              <li>Attempt to decompile or reverse engineer any software on the website</li>
              <li>Remove any copyright or proprietary notations from the materials</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">4. Products and Orders</h2>
            <p className="leading-relaxed mb-3">
              All products are made to order through our fulfilment partner Printful. We strive to display
              colours and images as accurately as possible, but we cannot guarantee that your device&apos;s
              display will accurately reflect the actual product.
            </p>
            <p className="leading-relaxed">
              We reserve the right to limit quantities, refuse orders, or discontinue products at any time.
              A contract is formed when we confirm your order by email.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">5. Pricing and Payment</h2>
            <p className="leading-relaxed mb-3">
              All prices are displayed in USD and include applicable VAT/taxes where required. Shipping
              costs are shown separately at checkout before you confirm your order. We reserve the right
              to change prices at any time; the price charged will be the price displayed at the time of
              order confirmation.
            </p>
            <p className="leading-relaxed">
              Payment is processed securely through Stripe. By providing payment information, you represent
              that you are authorised to use the payment method and that all information provided is accurate.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">6. Shipping and Delivery</h2>
            <p className="leading-relaxed mb-3">
              We ship to selected countries worldwide. Production typically takes 3–5 business days, with
              additional shipping time:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Standard Shipping: 5–10 business days after dispatch</li>
              <li>Express Shipping: 2–4 business days after dispatch</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Delivery dates are estimates only. We are not responsible for delays caused by customs,
              weather, or carrier issues beyond our control. Risk of loss transfers to you upon delivery.
            </p>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">7. Right of Withdrawal (Ångerrätt)</h2>
            <p className="leading-relaxed mb-3">
              Under the Swedish Distance and Off-Premises Contracts Act (Lag om distansavtal och avtal
              utanför affärslokaler, SFS 2005:59) and EU Directive 2011/83/EU, you have the right to
              withdraw from your purchase within{' '}
              <strong className="text-white">14 calendar days</strong> from the date you receive your
              goods, without giving any reason.
            </p>
            <p className="leading-relaxed mb-3">
              To exercise the right of withdrawal, you must notify us before the 14-day period expires
              by sending a clear statement to{' '}
              <a href="mailto:returns@bellemartinee.com" className="text-primary hover:text-primary-dark transition-colors">
                returns@bellemartinee.com
              </a>{' '}
              stating your order number, name, and that you wish to withdraw. You may also use our
              standard{' '}
              <a href="/return-policy#withdrawal-form" className="text-primary hover:text-primary-dark transition-colors">
                withdrawal form
              </a>
              .
            </p>
            <p className="leading-relaxed mb-3">
              Following a valid withdrawal, we will refund all payments received from you, including the
              standard delivery cost, within 14 days of receiving your withdrawal notice, provided we have
              received the returned goods or proof that you have sent them. The refund will be issued to
              your original payment method.
            </p>
            <p className="leading-relaxed">
              You are responsible for the direct cost of returning the goods. You are liable for any
              diminished value of the goods resulting from handling beyond what is necessary to establish
              their nature, characteristics, and functioning.
            </p>
            <p className="leading-relaxed mt-3 text-sm text-gray-500">
              Note: The right of withdrawal does not apply to custom-made or personalised products, or
              to products that have been unsealed after delivery and cannot be returned for hygiene reasons.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">8. Returns and Refunds</h2>
            <p className="leading-relaxed">
              For detailed information about returns, exchanges, complaint rights, and defective goods,
              please refer to our{' '}
              <a href="/return-policy" className="text-primary hover:text-primary-dark transition-colors">
                Return Policy
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">9. Defective Goods (Reklamation)</h2>
            <p className="leading-relaxed mb-3">
              Under the Swedish Consumer Sales Act (Konsumentköplagen, SFS 1990:932) and EU Directive
              2019/771, you have the right to lodge a complaint about defective goods. You may complain
              about a defect within:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-white">3 years</strong> from receipt of the goods (Swedish law)
              </li>
              <li>
                Defects discovered within 12 months of delivery are presumed to have existed at the time
                of delivery
              </li>
            </ul>
            <p className="leading-relaxed mt-3">
              If the goods are defective, you are entitled to repair, replacement, price reduction, or
              a full refund, depending on the circumstances. Contact{' '}
              <a href="mailto:returns@bellemartinee.com" className="text-primary hover:text-primary-dark transition-colors">
                returns@bellemartinee.com
              </a>{' '}
              with your order number and a description of the defect.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">10. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content on this website, including text, graphics, logos, images, and software, is the
              property of Belle Martinée and is protected by copyright, trademark, and other intellectual
              property laws. Unauthorised use is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">11. Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the fullest extent permitted by applicable law, Belle Martinée shall not be liable for
              any indirect, incidental, special, or consequential damages. Nothing in these terms limits
              or excludes our liability for personal injury or death caused by negligence, fraud, or any
              other liability that cannot be excluded under applicable Swedish or EU consumer law. Your
              statutory consumer rights are not affected by these terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">12. Governing Law and Disputes</h2>
            <p className="leading-relaxed mb-3">
              These Terms of Service are governed by Swedish law. If a dispute arises, we encourage you
              to contact us first to seek an amicable resolution. You also have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Submit a complaint to the Swedish National Board for Consumer Disputes (Allmänna
                reklamationsnämnden, ARN) at{' '}
                <a
                  href="https://www.arn.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  www.arn.se
                </a>
              </li>
              <li>
                Use the EU Online Dispute Resolution platform at{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  ec.europa.eu/consumers/odr
                </a>
              </li>
              <li>
                Bring proceedings in the courts of your country of residence (EU consumers)
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">13. Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective
              upon posting with an updated date. Your continued use of the website after changes are posted
              constitutes acceptance of the modified terms. For existing orders, the terms at the time of
              your order apply.
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
