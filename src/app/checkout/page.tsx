'use client';

import { useCart } from '@/components/CartContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function CheckoutPage() {
  const { items, total } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckout = async () => {
    if (items.length === 0) {
      setError('Your cart is empty');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items,
          successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: `${window.location.origin}/cart`,
        }),
      });

      const data = await res.json();

      if (data.error) {
        setError(data.error);
        setLoading(false);
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error('Checkout error:', err);
      setError('An error occurred during checkout. Please try again.');
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-6">
          <h2 className="text-2xl text-white">Your cart is empty</h2>
          <button onClick={() => router.push('/shop')} className="btn-primary">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-surface rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variantId || ''}`} className="flex gap-4">
                    <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white text-sm font-medium truncate">{item.name}</h3>
                      {item.size && (
                        <p className="text-gray-400 text-xs">Size: {item.size}</p>
                      )}
                      <p className="text-gray-400 text-xs">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-white font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-surface-light pt-4 space-y-2">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-white">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span className="text-white">Calculated at next step</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2">
                  <span className="text-white">Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="space-y-6">
            <div className="bg-surface rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-6">Payment Information</h2>

              <p className="text-gray-400 mb-6">
                You will be redirected to Stripe to securely complete your payment.
              </p>

              {error && (
                <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg mb-6">
                  {error}
                </div>
              )}

              <button
                onClick={handleCheckout}
                disabled={loading}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Processing...
                  </>
                ) : (
                  'Proceed to Payment'
                )}
              </button>

              <div className="mt-6 pt-6 border-t border-surface-light">
                <p className="text-xs text-gray-500 text-center">
                  Secure checkout powered by Stripe
                </p>
                <div className="flex justify-center gap-3 mt-3">
                  <span className="bg-surface-light px-3 py-1 rounded text-xs text-gray-400">
                    VISA
                  </span>
                  <span className="bg-surface-light px-3 py-1 rounded text-xs text-gray-400">
                    Mastercard
                  </span>
                  <span className="bg-surface-light px-3 py-1 rounded text-xs text-gray-400">
                    AMEX
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-lg p-6">
              <h3 className="text-white font-semibold mb-3">What happens next?</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-primary">1.</span>
                  <span>You'll be redirected to Stripe for secure payment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">2.</span>
                  <span>Your order will be sent to production</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">3.</span>
                  <span>You'll receive tracking information via email</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">4.</span>
                  <span>Delivery in 5-10 business days</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
