import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/components/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

export const metadata: Metadata = {
  title: 'Belle Martinée - Luxury Fashion & Style',
  description: 'Discover elegant, luxury fashion pieces from Belle Martinée. Wear Your Story with our premium collection of clothing and accessories.',
  keywords: ['fashion', 'luxury', 'clothing', 'accessories', 'style', 'Belle Martinée'],
  authors: [{ name: 'Belle Martinée' }],
  openGraph: {
    title: 'Belle Martinée - Luxury Fashion & Style',
    description: 'Discover elegant, luxury fashion pieces from Belle Martinée. Wear Your Story.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Belle Martinée',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Belle Martinée - Luxury Fashion & Style',
    description: 'Discover elegant, luxury fashion pieces from Belle Martinée. Wear Your Story.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <CartDrawer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
