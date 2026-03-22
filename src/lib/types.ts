export interface Product {
  id: string | number;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  images?: string[];
  variants?: ProductVariant[];
  category?: string;
}

export interface ProductVariant {
  id: string | number;
  name: string;
  price: number;
  inStock: boolean;
}

export interface CartItem {
  id: string | number;
  variantId?: string | number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
  color?: string;
}
