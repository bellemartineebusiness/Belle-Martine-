import { NextRequest, NextResponse } from 'next/server';
import { getProduct } from '@/lib/printful';

const MOCK_PRODUCTS: Record<string, {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  images: string[];
  category: string;
  variants?: { id: string; name: string; price: number; inStock: boolean }[];
}> = {
  '1': {
    id: '1',
    name: 'Belle Martinée Classic Tee',
    description: 'Premium quality unisex t-shirt featuring the Belle Martinée signature logo. Made from 100% organic cotton for ultimate comfort and breathability. This timeless piece is perfect for everyday wear, offering both style and sustainability.',
    price: 35.00,
    currency: 'USD',
    image: '/products/product-1.svg',
    images: ['/products/product-1.svg'],
    category: 'Tops',
    variants: [
      { id: '1-s', name: 'Small', price: 35.00, inStock: true },
      { id: '1-m', name: 'Medium', price: 35.00, inStock: true },
      { id: '1-l', name: 'Large', price: 35.00, inStock: true },
      { id: '1-xl', name: 'X-Large', price: 35.00, inStock: true },
    ],
  },
  '2': {
    id: '2',
    name: 'Signature Hoodie',
    description: 'Cozy and stylish hoodie with embroidered Belle Martinée logo. Perfect for casual outings. Features a soft fleece interior and adjustable drawstring hood.',
    price: 65.00,
    currency: 'USD',
    image: '/products/product-2.svg',
    images: ['/products/product-2.svg'],
    category: 'Tops',
    variants: [
      { id: '2-s', name: 'Small', price: 65.00, inStock: true },
      { id: '2-m', name: 'Medium', price: 65.00, inStock: true },
      { id: '2-l', name: 'Large', price: 65.00, inStock: true },
      { id: '2-xl', name: 'X-Large', price: 65.00, inStock: true },
    ],
  },
  '3': {
    id: '3',
    name: 'Gold Script Tote Bag',
    description: 'Elegant canvas tote bag with gold script logo. Spacious and durable for everyday use. Made from heavy-duty cotton canvas.',
    price: 28.00,
    currency: 'USD',
    image: '/products/product-3.svg',
    images: ['/products/product-3.svg'],
    category: 'Accessories',
  },
  '4': {
    id: '4',
    name: 'Belle Martinée Cap',
    description: 'Structured cap with signature gold embroidery. One size fits most. Features an adjustable strap for a perfect fit.',
    price: 32.00,
    currency: 'USD',
    image: '/products/product-4.svg',
    images: ['/products/product-4.svg'],
    category: 'Accessories',
  },
  '5': {
    id: '5',
    name: 'Script Logo Mug',
    description: '15oz premium ceramic mug with gold Belle Martinée script. Microwave and dishwasher safe. Perfect for your morning coffee or tea.',
    price: 22.00,
    currency: 'USD',
    image: '/products/product-5.svg',
    images: ['/products/product-5.svg'],
    category: 'Home',
  },
  '6': {
    id: '6',
    name: 'Luxury Sweatshirt',
    description: 'Premium heavyweight sweatshirt in the classic Belle Martinée style. Ultra-soft cotton blend for maximum comfort.',
    price: 55.00,
    currency: 'USD',
    image: '/products/product-6.svg',
    images: ['/products/product-6.svg'],
    category: 'Tops',
    variants: [
      { id: '6-s', name: 'Small', price: 55.00, inStock: true },
      { id: '6-m', name: 'Medium', price: 55.00, inStock: true },
      { id: '6-l', name: 'Large', price: 55.00, inStock: true },
      { id: '6-xl', name: 'X-Large', price: 55.00, inStock: true },
    ],
  },
  '7': {
    id: '7',
    name: 'Embroidered Crewneck',
    description: 'Soft cotton crewneck with elegant Belle Martinée embroidery on chest. Classic fit for everyday comfort.',
    price: 48.00,
    currency: 'USD',
    image: '/products/product-7.svg',
    images: ['/products/product-7.svg'],
    category: 'Tops',
    variants: [
      { id: '7-s', name: 'Small', price: 48.00, inStock: true },
      { id: '7-m', name: 'Medium', price: 48.00, inStock: true },
      { id: '7-l', name: 'Large', price: 48.00, inStock: true },
      { id: '7-xl', name: 'X-Large', price: 48.00, inStock: true },
    ],
  },
  '8': {
    id: '8',
    name: 'Signature Baseball Tee',
    description: 'Classic baseball tee with contrast sleeves and Belle Martinée logo. Comfortable tri-blend fabric.',
    price: 38.00,
    currency: 'USD',
    image: '/products/product-8.svg',
    images: ['/products/product-8.svg'],
    category: 'Tops',
    variants: [
      { id: '8-s', name: 'Small', price: 38.00, inStock: true },
      { id: '8-m', name: 'Medium', price: 38.00, inStock: true },
      { id: '8-l', name: 'Large', price: 38.00, inStock: true },
      { id: '8-xl', name: 'X-Large', price: 38.00, inStock: true },
    ],
  },
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  try {
    if (process.env.PRINTFUL_API_KEY) {
      const product = await getProduct(id);
      return NextResponse.json({ product });
    }
  } catch (error) {
    console.error('Printful API error, using mock data:', error);
  }

  const product = MOCK_PRODUCTS[id];
  
  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
  
  return NextResponse.json({ product });
}
