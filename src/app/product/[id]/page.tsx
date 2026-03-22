'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useCart } from '@/components/CartContext';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Product } from '@/lib/types';
import { ShoppingBag, Check } from 'lucide-react';

export default function ProductPage() {
  const params = useParams();
  const { addItem } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`/api/product/${params.id}`);
        const data = await res.json();
        
        if (data.product) {
          setProduct(data.product);
          if (data.product.variants && data.product.variants.length > 0) {
            setSelectedVariant(data.product.variants[0].id);
          }
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    }

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  const handleAddToCart = () => {
    if (!product) return;

    const variantName = product.variants?.find((v) => v.id === selectedVariant)?.name;

    addItem({
      id: product.id,
      variantId: selectedVariant || undefined,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
      size: variantName,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">Product not found</h2>
          <a href="/shop" className="text-primary hover:text-primary-dark">
            Return to Shop
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square relative rounded-lg overflow-hidden bg-surface">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => (
                  <div key={idx} className="aspect-square relative rounded overflow-hidden bg-surface cursor-pointer hover:ring-2 hover:ring-primary transition-all">
                    <Image
                      src={img}
                      alt={`${product.name} - ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="150px"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {product.category && (
              <p className="text-primary text-sm font-semibold uppercase tracking-wide">
                {product.category}
              </p>
            )}
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {product.name}
            </h1>
            <p className="text-3xl font-bold text-primary">
              ${product.price.toFixed(2)} {product.currency}
            </p>
            <p className="text-gray-400 leading-relaxed">
              {product.description}
            </p>

            {/* Size/Variant Selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="space-y-3">
                <label className="text-white font-semibold block">
                  Select Size
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant.id.toString())}
                      disabled={!variant.inStock}
                      className={`px-6 py-3 rounded-lg border-2 transition-all ${
                        selectedVariant === variant.id
                          ? 'border-primary bg-primary text-background'
                          : variant.inStock
                          ? 'border-surface-light text-white hover:border-primary'
                          : 'border-surface-light text-gray-600 cursor-not-allowed'
                      }`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="space-y-3">
              <label className="text-white font-semibold block">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded bg-surface hover:bg-surface-light text-white transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center text-white font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded bg-surface hover:bg-surface-light text-white transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={added}
              className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 ${
                added
                  ? 'bg-green-600 text-white'
                  : 'bg-primary hover:bg-primary-dark text-background'
              }`}
            >
              {added ? (
                <>
                  <Check size={24} />
                  Added to Cart!
                </>
              ) : (
                <>
                  <ShoppingBag size={24} />
                  Add to Cart
                </>
              )}
            </button>

            {/* Additional Info */}
            <div className="border-t border-surface-light pt-6 space-y-3 text-sm">
              <div className="flex justify-between text-gray-400">
                <span>Free shipping on orders over $75</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>30-day return policy</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Secure checkout with Stripe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
