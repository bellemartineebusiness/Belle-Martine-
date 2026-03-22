import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-surface-light mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-script text-primary">Belle Martinée</h3>
            <p className="text-gray-400 text-sm">Wear Your Story</p>
            <div className="text-xs text-gray-500 space-y-1">
              <p>Belle Martinée</p>
              <p>Org.nr: [ORGANISATION NUMBER]</p>
              <p>[STREET ADDRESS]</p>
              <p>[POSTAL CODE] [CITY], Sweden</p>
              <p>
                <a href="mailto:info@bellemartinee.com" className="hover:text-primary transition-colors">
                  info@bellemartinee.com
                </a>
              </p>
            </div>
          </div>

          {/* Shop Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-primary transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Tops" className="text-gray-400 hover:text-primary transition-colors">
                  Tops
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Accessories" className="text-gray-400 hover:text-primary transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/return-policy" className="text-gray-400 hover:text-primary transition-colors">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link href="/return-policy#right-of-withdrawal" className="text-gray-400 hover:text-primary transition-colors">
                  14-Day Right of Withdrawal
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
            <div className="text-sm text-gray-400 mt-4">
              <p className="mb-2">Secure Payment</p>
              <div className="flex gap-2 text-xs">
                <span className="bg-surface-light px-2 py-1 rounded">VISA</span>
                <span className="bg-surface-light px-2 py-1 rounded">MC</span>
                <span className="bg-surface-light px-2 py-1 rounded">AMEX</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-surface-light mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Belle Martinée. All rights reserved.</p>
          <p className="mt-2 text-xs">Powered by Printful &amp; Stripe</p>
          <p className="mt-2 text-xs">
            Disputes?{' '}
            <a
              href="https://www.arn.se"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              ARN (Sweden)
            </a>
            {' · '}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              EU ODR Platform
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
