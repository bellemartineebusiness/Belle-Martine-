export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Return Policy</h1>
        
        <div className="bg-surface rounded-lg p-8 md:p-12 space-y-8 text-gray-400">
          <div>
            <p className="text-sm text-gray-500 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="leading-relaxed">
              At Belle Martinée, we want you to love your purchase. This Return Policy outlines our
              procedures for returns, exchanges, and refunds.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Guarantee</h2>
            <p className="leading-relaxed">
              We stand behind the quality of our products. If you're not completely satisfied with your
              purchase, we're here to help.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Return Eligibility</h2>
            <p className="leading-relaxed mb-3">
              To be eligible for a return, items must meet the following criteria:
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
              The following items cannot be returned:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Custom or personalized products</li>
              <li>Items marked as final sale</li>
              <li>Items showing signs of wear or washing</li>
              <li>Items without original packaging or tags</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">How to Initiate a Return</h2>
            <p className="leading-relaxed mb-3">
              To start a return, please follow these steps:
            </p>
            <ol className="list-decimal list-inside space-y-3 ml-4">
              <li className="leading-relaxed">
                <strong>Contact Us:</strong> Email us at{' '}
                <a href="mailto:returns@bellemartinee.com" className="text-primary hover:text-primary-dark transition-colors">
                  returns@bellemartinee.com
                </a>{' '}
                with your order number and reason for return
              </li>
              <li className="leading-relaxed">
                <strong>Receive Authorization:</strong> We'll provide you with a return authorization
                number and shipping instructions
              </li>
              <li className="leading-relaxed">
                <strong>Pack Your Item:</strong> Securely package the item with all original tags
                and packaging
              </li>
              <li className="leading-relaxed">
                <strong>Ship It Back:</strong> Send the package to the address provided using a
                trackable shipping method
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Return Shipping Costs</h2>
            <p className="leading-relaxed mb-3">
              Return shipping costs depend on the reason for the return:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Defective or Damaged Items:</strong> We cover return shipping costs</li>
              <li><strong>Our Error:</strong> We cover return shipping costs</li>
              <li><strong>Change of Mind:</strong> Customer is responsible for return shipping</li>
              <li><strong>Wrong Size/Color:</strong> Customer is responsible for return shipping</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Refunds</h2>
            <p className="leading-relaxed mb-3">
              Once we receive your returned item, we will:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Inspect the item to verify it meets return eligibility criteria</li>
              <li>Process your refund within 5-7 business days</li>
              <li>Issue the refund to your original payment method</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Please note that it may take an additional 5-10 business days for the refund to appear
              in your account, depending on your financial institution.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Exchanges</h2>
            <p className="leading-relaxed">
              We do not offer direct exchanges at this time. If you need a different size or color,
              please return the original item for a refund and place a new order for the desired item.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Damaged or Defective Items</h2>
            <p className="leading-relaxed mb-3">
              If you receive a damaged or defective item:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Contact us within 7 days of delivery</li>
              <li>Provide photos of the damage or defect</li>
              <li>Include your order number</li>
            </ul>
            <p className="leading-relaxed mt-3">
              We'll work quickly to send you a replacement or issue a full refund, including original
              shipping costs.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Lost or Damaged in Transit</h2>
            <p className="leading-relaxed">
              If your package is lost or damaged during return shipping, please contact the carrier
              immediately. We recommend using a trackable shipping method and purchasing shipping
              insurance for valuable items.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">International Returns</h2>
            <p className="leading-relaxed">
              International customers are responsible for all return shipping costs and any customs fees.
              We cannot control or reimburse customs fees, duties, or taxes charged by your country.
            </p>
          </div>

          <div className="border-t border-surface-light pt-6">
            <h2 className="text-2xl font-bold text-white mb-4">Questions?</h2>
            <p className="leading-relaxed mb-2">
              If you have any questions about our Return Policy, please don't hesitate to contact us:
            </p>
            <p className="text-primary mb-2">
              <a href="mailto:returns@bellemartinee.com" className="hover:text-primary-dark transition-colors">
                returns@bellemartinee.com
              </a>
            </p>
            <p className="text-sm text-gray-500">
              We typically respond within 24-48 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
