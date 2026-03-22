export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Return Policy</h1>

        <div className="bg-surface rounded-lg p-8 md:p-12 space-y-8 text-gray-400">
          <div>
            <p className="text-sm text-gray-500 mb-6">Last updated: 2025-01-01</p>
            <p className="leading-relaxed">
              At Belle Martinée, we want you to love your purchase. This Return Policy outlines your
              legal rights and our procedures for withdrawals, returns, exchanges, and refunds. Your
              statutory rights under Swedish and EU consumer law are always protected.
            </p>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6" id="right-of-withdrawal">
            <h2 className="text-2xl font-bold text-white mb-4">Your 14-Day Right of Withdrawal (Ångerrätt)</h2>
            <p className="leading-relaxed mb-3">
              Under the Swedish Distance and Off-Premises Contracts Act (Distansavtalslagen, SFS 2005:59)
              and EU Directive 2011/83/EU, you have the right to withdraw from your purchase within{' '}
              <strong className="text-white">14 calendar days</strong> from the day you (or a third party
              other than the carrier, indicated by you) receive the goods — without giving any reason and
              without incurring any costs other than the direct cost of returning the goods.
            </p>
            <p className="leading-relaxed mb-3">
              To exercise your right of withdrawal, you must inform us of your decision before the 14-day
              period expires. You can do so by:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
              <li>
                Sending an email to{' '}
                <a href="mailto:returns@bellemartinee.com" className="text-primary hover:text-primary-dark transition-colors">
                  returns@bellemartinee.com
                </a>{' '}
                with your order number and a clear statement that you wish to withdraw
              </li>
              <li>Using the standard withdrawal form below</li>
            </ul>
            <p className="leading-relaxed">
              You must return the goods to us without undue delay and no later than{' '}
              <strong className="text-white">14 days</strong> after notifying us of your withdrawal.
              We will refund all payments received, including the standard delivery cost, within 14 days
              of receiving your returned goods (or proof of return). The refund will be issued to your
              original payment method.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Guarantee</h2>
            <p className="leading-relaxed">
              Beyond your statutory rights, we stand behind the quality of our products. If you are not
              completely satisfied, we are here to help.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Return Eligibility (Beyond Statutory Rights)</h2>
            <p className="leading-relaxed mb-3">
              For returns outside the 14-day statutory withdrawal period, items must meet the following
              criteria:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Return request made within 30 days of delivery</li>
              <li>Item is unworn, unwashed, and in original condition</li>
              <li>All original tags and packaging are included</li>
              <li>Item is not a final sale or custom-made product</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Non-Returnable Items</h2>
            <p className="leading-relaxed mb-3">
              The right of withdrawal and our extended return policy do not apply to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Custom or personalised products made to your specifications</li>
              <li>Items marked as final sale</li>
              <li>Goods that are clearly personalised</li>
              <li>Items showing signs of wear, washing, or damage caused by the customer</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">How to Initiate a Return</h2>
            <p className="leading-relaxed mb-3">
              To start a return, please follow these steps:
            </p>
            <ol className="list-decimal list-inside space-y-3 ml-4">
              <li className="leading-relaxed">
                <strong className="text-white">Contact Us:</strong> Email{' '}
                <a href="mailto:returns@bellemartinee.com" className="text-primary hover:text-primary-dark transition-colors">
                  returns@bellemartinee.com
                </a>{' '}
                with your order number and reason for return (or a withdrawal notice)
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Receive Instructions:</strong> We will provide you with
                a return authorisation and shipping address within 2 business days
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Pack Your Item:</strong> Securely package the item with
                all original tags and packaging
              </li>
              <li className="leading-relaxed">
                <strong className="text-white">Ship It Back:</strong> Send the package using a trackable
                shipping method within 14 days of notifying us
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Return Shipping Costs</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-white">14-day right of withdrawal:</strong> You bear the direct
                cost of return shipping
              </li>
              <li>
                <strong className="text-white">Defective or Damaged Items:</strong> We cover return
                shipping costs
              </li>
              <li>
                <strong className="text-white">Our Error (wrong item sent):</strong> We cover return
                shipping costs
              </li>
              <li>
                <strong className="text-white">Change of Mind (beyond 14 days):</strong> Customer is
                responsible for return shipping
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Refunds</h2>
            <p className="leading-relaxed mb-3">
              Once we receive your returned item, we will:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Inspect the item to verify it meets return eligibility criteria</li>
              <li>Process your refund within 14 days (for statutory withdrawals) or 5–7 business days (other returns)</li>
              <li>Issue the refund to your original payment method</li>
              <li>Refund standard delivery costs for statutory withdrawals</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Please note that it may take an additional 5–10 business days for the refund to appear in
              your account, depending on your financial institution.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Defective Goods (Reklamation)</h2>
            <p className="leading-relaxed mb-3">
              Under the Swedish Consumer Sales Act (Konsumentköplagen) you have the right to lodge a
              complaint about defective goods for up to <strong className="text-white">3 years</strong>{' '}
              from the date of delivery. Defects discovered within 12 months are presumed to have existed
              at delivery.
            </p>
            <p className="leading-relaxed mb-3">
              If you receive a defective or damaged item:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Contact us as soon as possible after discovering the defect</li>
              <li>Provide photos of the damage or defect and your order number</li>
              <li>
                Email{' '}
                <a href="mailto:returns@bellemartinee.com" className="text-primary hover:text-primary-dark transition-colors">
                  returns@bellemartinee.com
                </a>
              </li>
            </ul>
            <p className="leading-relaxed mt-3">
              We will offer repair, replacement, price reduction, or a full refund (including original
              shipping costs) as appropriate.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Exchanges</h2>
            <p className="leading-relaxed">
              We do not offer direct exchanges at this time. If you need a different size or colour,
              please exercise your right of withdrawal or return the item and place a new order.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">International Returns</h2>
            <p className="leading-relaxed">
              International customers bear return shipping costs and any applicable customs fees, except
              where the return is due to a defect or our error. We cannot reimburse customs fees or duties
              charged by your country. Your statutory rights under your country&apos;s consumer protection
              legislation still apply.
            </p>
          </div>

          <div className="bg-surface-light rounded-lg p-6" id="withdrawal-form">
            <h2 className="text-2xl font-bold text-white mb-4">Standard Withdrawal Form</h2>
            <p className="leading-relaxed mb-4 text-sm">
              You may use this form to exercise your right of withdrawal. Send the completed form to{' '}
              <a href="mailto:returns@bellemartinee.com" className="text-primary hover:text-primary-dark transition-colors">
                returns@bellemartinee.com
              </a>
              .
            </p>
            <div className="font-mono text-sm space-y-2 border border-surface p-4 rounded text-gray-300">
              <p>To: Belle Martinée, returns@bellemartinee.com</p>
              <p className="mt-4">I/We (*) hereby give notice that I/We (*) withdraw from my/our (*) contract of sale of the following goods:</p>
              <p className="mt-2">Order number: _______________________</p>
              <p>Ordered on: _______________________</p>
              <p>Received on: _______________________</p>
              <p>Name of consumer(s): _______________________</p>
              <p>Address of consumer(s): _______________________</p>
              <p className="mt-2">Signature (only if this form is notified on paper): _______________________</p>
              <p>Date: _______________________</p>
              <p className="mt-2 text-gray-500">(*) Delete as appropriate.</p>
            </div>
          </div>

          <div className="border-t border-surface-light pt-6">
            <h2 className="text-2xl font-bold text-white mb-4">Questions?</h2>
            <p className="leading-relaxed mb-2">
              If you have any questions about our Return Policy, your right of withdrawal, or how to
              file a complaint, please contact us:
            </p>
            <p className="text-primary mb-2">
              <a href="mailto:returns@bellemartinee.com" className="hover:text-primary-dark transition-colors">
                returns@bellemartinee.com
              </a>
            </p>
            <p className="text-sm text-gray-500 mb-4">
              We typically respond within 24–48 hours during business days.
            </p>
            <p className="text-sm text-gray-500">
              You may also submit a complaint to the Swedish National Board for Consumer Disputes (ARN)
              at{' '}
              <a
                href="https://www.arn.se"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark transition-colors"
              >
                www.arn.se
              </a>{' '}
              or use the EU Online Dispute Resolution platform at{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark transition-colors"
              >
                ec.europa.eu/consumers/odr
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
