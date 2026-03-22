import Link from 'next/link';
import { ArrowRight, Sparkles, Leaf, Shirt } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { MOCK_PRODUCTS } from '@/lib/mockProducts';
import { getStoreProducts } from '@/lib/printful';
import { Product } from '@/lib/types';

async function getFeaturedProducts(): Promise<Product[]> {
  try {
    if (process.env.PRINTFUL_API_KEY) {
      const products = await getStoreProducts();
      return products.slice(0, 4);
    }
  } catch (error) {
    console.error('Error fetching products from Printful:', error);
  }
  return MOCK_PRODUCTS.slice(0, 4);
}

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-background via-background to-surface">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-6xl md:text-8xl font-script text-primary animate-fade-in">
              Belle Martinée
            </h1>
            <p className="text-2xl md:text-3xl text-white font-light">
              Wear Your Story
            </p>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover our exclusive collection of premium fashion pieces, designed for those who dare to stand out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/shop" className="btn-primary inline-flex items-center justify-center gap-2">
                Shop Now
                <ArrowRight size={20} />
              </Link>
              <Link href="/about" className="btn-secondary inline-flex items-center justify-center">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Collection</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Handpicked pieces from our latest collection, crafted with attention to detail and style.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/shop" className="btn-primary inline-flex items-center gap-2">
                View All Products
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Brand Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              What makes Belle Martinée different
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4 p-6 bg-surface rounded-lg hover:ring-2 hover:ring-primary transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white">Premium Quality</h3>
              <p className="text-gray-400">
                Every piece is crafted with the finest materials and meticulous attention to detail.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-surface rounded-lg hover:ring-2 hover:ring-primary transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Leaf className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white">Sustainable</h3>
              <p className="text-gray-400">
                We partner with eco-conscious suppliers to minimize our environmental impact.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-surface rounded-lg hover:ring-2 hover:ring-primary transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shirt className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white">Timeless Style</h3>
              <p className="text-gray-400">
                Fashion that transcends trends, designed to be cherished for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Stay Updated</h2>
            <p className="text-gray-400">
              Subscribe to our newsletter for exclusive offers, new arrivals, and style inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field flex-1"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
