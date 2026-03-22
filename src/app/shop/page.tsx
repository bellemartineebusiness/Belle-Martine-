'use client';

import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Product } from '@/lib/types';

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const categories = ['All', ...Array.from(new Set(products.map((p) => p.category).filter(Boolean)))] as string[];
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter((p) => p.category === selectedCategory);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Shop Collection
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our curated selection of premium fashion pieces
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-background font-semibold'
                  : 'bg-surface text-gray-400 hover:text-white hover:bg-surface-light'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
