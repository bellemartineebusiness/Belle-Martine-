export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="bg-surface rounded-lg p-8 md:p-12 space-y-8 text-gray-400">
          <div>
            <p className="text-sm text-gray-500 mb-6">Last updated: 2025-01-01</p>
            <p className="leading-relaxed">
              At Belle Martinée, we take your privacy seriously. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your personal data when you visit our website and
              make purchases. We comply with the General Data Protection Regulation (GDPR), the Swedish
              Data Protection Act (Dataskyddslagen 2018:218), and other applicable privacy legislation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">1. Data Controller</h2>
            <p className="leading-relaxed mb-3">
              The data controller responsible for your personal data is:
            </p>
            <address className="not-italic space-y-1 ml-4">
              <p className="font-semibold text-white">Belle Martinée</p>
              <p>Org.nr: [ORGANISATION NUMBER]</p>
              <p>[STREET ADDRESS]</p>
              <p>[POSTAL CODE] [CITY], Sweden</p>
              <p>
                Email:{' '}
                <a href="mailto:privacy@bellemartinee.com" className="text-primary hover:text-primary-dark transition-colors">
                  privacy@bellemartinee.com
                </a>
              </p>
            </address>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">2. Personal Data We Collect</h2>
            <p className="leading-relaxed mb-3">
              We collect the following categories of personal data:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Identity data: name and contact information</li>
              <li>Contact data: email address, shipping and billing addresses</li>
              <li>Transaction data: order history, purchased products, and payment records</li>
              <li>Payment data: processed securely by Stripe — we do not store card numbers</li>
              <li>Technical data: IP address, browser type, pages visited (via cookies)</li>
              <li>Communications: messages you send us via email or contact forms</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">3. Legal Basis for Processing</h2>
            <p className="leading-relaxed mb-3">
              We process your personal data on the following legal bases (GDPR Article 6):
            </p>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>
                <strong className="text-white">Contract performance (Art. 6(1)(b)):</strong> Processing
                necessary to fulfil your order, manage returns, and provide customer support.
              </li>
              <li>
                <strong className="text-white">Legal obligation (Art. 6(1)(c)):</strong> Retaining
                accounting records and order data as required by Swedish law (Bokföringslagen).
              </li>
              <li>
                <strong className="text-white">Legitimate interest (Art. 6(1)(f)):</strong> Preventing
                fraud, improving our website, and analysing anonymous site statistics.
              </li>
              <li>
                <strong className="text-white">Consent (Art. 6(1)(a)):</strong> Sending marketing
                newsletters — you may withdraw consent at any time.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">4. How We Use Your Personal Data</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Processing and fulfilling your orders</li>
              <li>Sending order confirmations and shipping updates</li>
              <li>Handling returns, complaints, and customer support</li>
              <li>Complying with legal and accounting obligations</li>
              <li>Sending marketing communications (only with your explicit consent)</li>
              <li>Preventing fraud and ensuring website security</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">5. Sharing Your Personal Data</h2>
            <p className="leading-relaxed mb-3">
              We share your data only with trusted third-party processors under data processing agreements:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-white">Stripe, Inc.</strong> — payment processing (USA, covered
                by Standard Contractual Clauses)
              </li>
              <li>
                <strong className="text-white">Printful, Inc.</strong> — order fulfilment and printing
                (USA, covered by Standard Contractual Clauses)
              </li>
              <li>
                <strong className="text-white">Shipping carriers</strong> — delivery of your orders
              </li>
              <li>
                <strong className="text-white">Authorities</strong> — when required by law (e.g. tax
                authorities, courts)
              </li>
            </ul>
            <p className="leading-relaxed mt-3">
              We do not sell or rent your personal data to any third party.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">6. International Data Transfers</h2>
            <p className="leading-relaxed">
              Stripe and Printful are based in the United States. Transfers of your personal data
              outside the European Economic Area (EEA) are protected by Standard Contractual Clauses
              (SCCs) approved by the European Commission, ensuring an adequate level of data protection.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-white">Order and accounting data:</strong> Retained for 7 years
                as required by the Swedish Bookkeeping Act (Bokföringslagen).
              </li>
              <li>
                <strong className="text-white">Customer account data:</strong> Retained until you
                request deletion, or 3 years after your last interaction.
              </li>
              <li>
                <strong className="text-white">Marketing consent records:</strong> Retained until you
                withdraw consent plus an additional 3 years for documentation purposes.
              </li>
              <li>
                <strong className="text-white">Technical/cookie data:</strong> Retained for up to 13
                months, depending on the type of cookie.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">8. Cookies and Tracking</h2>
            <p className="leading-relaxed mb-3">
              We use cookies and similar technologies on our website. Cookies are small text files stored
              on your device. We use the following categories of cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-white">Strictly necessary cookies:</strong> Required for the
                website to function (e.g. shopping cart, session management). No consent required.
              </li>
              <li>
                <strong className="text-white">Functional cookies:</strong> Remember your preferences
                (e.g. language). Require consent.
              </li>
              <li>
                <strong className="text-white">Analytics cookies:</strong> Anonymised statistics about
                how visitors use our website. Require consent.
              </li>
            </ul>
            <p className="leading-relaxed mt-3">
              You can control and delete cookies through your browser settings at any time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">9. Your Rights Under GDPR</h2>
            <p className="leading-relaxed mb-3">
              Under the GDPR you have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-white">Right of access (Art. 15):</strong> Request a copy of
                the personal data we hold about you.
              </li>
              <li>
                <strong className="text-white">Right to rectification (Art. 16):</strong> Request
                correction of inaccurate or incomplete data.
              </li>
              <li>
                <strong className="text-white">Right to erasure (Art. 17):</strong> Request deletion
                of your data ("right to be forgotten"), subject to legal retention obligations.
              </li>
              <li>
                <strong className="text-white">Right to restriction of processing (Art. 18):</strong>{' '}
                Request that we limit how we use your data in certain circumstances.
              </li>
              <li>
                <strong className="text-white">Right to data portability (Art. 20):</strong> Receive
                your data in a structured, machine-readable format and transfer it to another controller.
              </li>
              <li>
                <strong className="text-white">Right to object (Art. 21):</strong> Object to processing
                based on legitimate interest or for direct marketing purposes.
              </li>
              <li>
                <strong className="text-white">Right to withdraw consent:</strong> Withdraw marketing
                consent at any time without affecting prior processing.
              </li>
            </ul>
            <p className="leading-relaxed mt-3">
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:privacy@bellemartinee.com" className="text-primary hover:text-primary-dark transition-colors">
                privacy@bellemartinee.com
              </a>
              . We will respond within 30 days. You will not be charged a fee unless your request is
              manifestly unfounded or excessive.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">10. Right to Lodge a Complaint</h2>
            <p className="leading-relaxed">
              If you believe we are processing your personal data unlawfully, you have the right to
              lodge a complaint with the Swedish Authority for Privacy Protection (Integritetsskyddsmyndigheten,
              IMY):
            </p>
            <address className="not-italic mt-3 space-y-1 ml-4">
              <p className="font-semibold text-white">Integritetsskyddsmyndigheten (IMY)</p>
              <p>Box 8114, 104 20 Stockholm, Sweden</p>
              <p>
                Website:{' '}
                <a
                  href="https://www.imy.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  www.imy.se
                </a>
              </p>
            </address>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">11. Data Security</h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organisational measures to protect your personal
              data against unauthorised access, loss, or alteration. Payment data is processed exclusively
              through Stripe using TLS encryption. We do not store full payment card numbers on our systems.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">12. Children&apos;s Privacy</h2>
            <p className="leading-relaxed">
              Our services are not directed to individuals under the age of 16. We do not knowingly
              collect personal data from children under 16. If you believe a child has provided us with
              personal data, please contact us so we can delete it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">13. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. Material changes will be communicated
              by updating the &quot;Last updated&quot; date above and, where appropriate, by notifying you
              directly. We encourage you to review this policy periodically.
            </p>
          </div>

          <div className="border-t border-surface-light pt-6">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="leading-relaxed mb-2">
              For questions about this Privacy Policy or to exercise your data rights, contact our Data
              Protection contact:
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
