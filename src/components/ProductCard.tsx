import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group bg-surface rounded-lg overflow-hidden hover:ring-2 hover:ring-primary transition-all duration-300"
    >
      <div className="aspect-square relative overflow-hidden bg-surface-light">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold mb-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        {product.category && (
          <p className="text-gray-400 text-sm mb-2">{product.category}</p>
        )}
        <p className="text-primary font-bold">
          ${product.price.toFixed(2)} {product.currency}
        </p>
      </div>
    </Link>
  );
}
