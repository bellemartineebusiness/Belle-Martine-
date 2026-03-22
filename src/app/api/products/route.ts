import { NextResponse } from 'next/server';
import { getStoreProducts } from '@/lib/printful';
import { MOCK_PRODUCTS } from '@/lib/mockProducts';

export async function GET() {
  try {
    if (process.env.PRINTFUL_API_KEY) {
      const products = await getStoreProducts();
      return NextResponse.json({ products });
    }
  } catch (error) {
    console.error('Printful API error, using mock data:', error);
  }
  
  return NextResponse.json({ products: MOCK_PRODUCTS });
}
