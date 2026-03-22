'use client';

import { useCart } from './CartContext';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function CartDrawer() {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, total } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-surface z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-surface-light">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            <ShoppingCart size={24} />
            Your Cart
          </h2>
          <button
            onClick={() => setCartOpen(false)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart size={48} className="mx-auto text-gray-600 mb-4" />
              <p className="text-gray-400">Your cart is empty</p>
              <button
                onClick={() => setCartOpen(false)}
                className="mt-4 text-primary hover:text-primary-dark transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.variantId || ''}`} className="flex gap-4 bg-background rounded-lg p-4">
                  <div className="relative w-20 h-20 flex-shrink-0 rounded overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white text-sm font-medium truncate">{item.name}</h3>
                    {(item.size || item.color) && (
                      <p className="text-gray-400 text-xs mt-1">
                        {item.size && `Size: ${item.size}`}
                        {item.size && item.color && ' | '}
                        {item.color && `Color: ${item.color}`}
                      </p>
                    )}
                    <p className="text-primary font-semibold mt-2">${item.price.toFixed(2)}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded bg-surface-light hover:bg-surface text-white flex items-center justify-center"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-white text-sm w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded bg-surface-light hover:bg-surface text-white flex items-center justify-center"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-gray-400 hover:text-red-500 transition-colors text-xs"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-surface-light p-6 space-y-4">
            <div className="flex justify-between text-lg">
              <span className="text-gray-400">Subtotal</span>
              <span className="text-white font-bold">${total.toFixed(2)}</span>
            </div>
            <Link
              href="/checkout"
              className="block w-full bg-primary hover:bg-primary-dark text-background font-bold py-3 px-6 rounded-lg text-center transition-colors"
              onClick={() => setCartOpen(false)}
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={() => setCartOpen(false)}
              className="block w-full text-gray-400 hover:text-white text-sm transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
