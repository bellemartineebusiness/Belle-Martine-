'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Package, Mail } from 'lucide-react';
import { useCart } from '@/components/CartContext';

function SuccessContent() {
  const searchParams = useSearchParams();
  const { clearCart } = useCart();
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    const id = searchParams.get('session_id');
    if (id) {
      setSessionId(id);
      clearCart();
    }
  }, [searchParams, clearCart]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-surface rounded-lg p-8 md:p-12 text-center space-y-8">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="text-green-500" size={48} />
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Order Successful!
            </h1>
            <p className="text-gray-400 text-lg">
              Thank you for your purchase from Belle Martinée
            </p>
          </div>

          {/* Session ID */}
          {sessionId && (
            <div className="bg-background rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Order Reference</p>
              <p className="text-sm text-gray-400 font-mono break-all">{sessionId}</p>
            </div>
          )}

          {/* Next Steps */}
          <div className="space-y-4 text-left bg-background rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">What's Next?</h2>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Order Confirmation</h3>
                <p className="text-gray-400 text-sm">
                  You'll receive an email confirmation shortly with your order details.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Package className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Production & Shipping</h3>
                <p className="text-gray-400 text-sm">
                  Your items will be produced and shipped within 3-5 business days. 
                  You'll receive tracking information via email.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/shop" className="btn-primary flex-1 text-center">
              Continue Shopping
            </Link>
            <Link href="/" className="btn-secondary flex-1 text-center">
              Back to Home
            </Link>
          </div>

          {/* Support */}
          <div className="pt-6 border-t border-surface-light">
            <p className="text-sm text-gray-400">
              Questions about your order?{' '}
              <a href="mailto:support@bellemartinee.com" className="text-primary hover:text-primary-dark transition-colors">
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
