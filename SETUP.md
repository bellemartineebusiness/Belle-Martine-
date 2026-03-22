# Belle Martinée - Setup Guide

## ✅ Project Status

The e-commerce store has been successfully created and built! All files are in place and the application compiles without errors.

## 🚀 Quick Start

1. **Install Dependencies** (already done):
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   
   Then edit `.env.local` and add your API keys:
   - **Stripe Keys**: Get from https://dashboard.stripe.com/test/apikeys
   - **Printful API Key**: Get from https://www.printful.com/dashboard/settings
   - **Site URL**: Use `http://localhost:3000` for local development

3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   
   Open http://localhost:3000 in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## 📦 What's Included

### Pages
- ✅ Home/Landing page with hero section and featured products
- ✅ Shop page with category filtering
- ✅ Product detail pages with size/variant selection
- ✅ Shopping cart page
- ✅ Checkout page with Stripe integration
- ✅ Order success page
- ✅ About page
- ✅ Privacy Policy (complete legal text)
- ✅ Terms of Service (complete legal text)
- ✅ Return Policy (complete legal text)

### Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Persistent shopping cart (localStorage)
- ✅ Sliding cart drawer
- ✅ Stripe Checkout integration
- ✅ Printful API integration (with mock data fallback)
- ✅ Category filtering
- ✅ Product variants/sizes
- ✅ Professional UI with brand colors
- ✅ Loading states
- ✅ Error handling

### API Routes
- ✅ GET /api/products - List all products
- ✅ GET /api/product/[id] - Single product details
- ✅ POST /api/checkout - Create Stripe session
- ✅ POST /api/webhook - Stripe webhook handler

### Components
- ✅ Header with navigation and cart
- ✅ Footer with links and social icons
- ✅ Product cards
- ✅ Cart context (React Context API)
- ✅ Cart drawer
- ✅ Loading spinner

## 🎨 Brand Colors

The following brand colors are configured:
- Primary Gold: `#F5C842`
- Primary Dark: `#d4a92e`
- Background: `#0a0a0a`
- Surface: `#1a1a1a`
- Surface Light: `#2a2a2a`

## 🔑 Environment Variables

Required environment variables (see `.env.local.example`):

```env
# Stripe (for payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Printful (for products)
PRINTFUL_API_KEY=...

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Note**: The app works with mock data if Printful API key is not provided.

## 🧪 Testing Without API Keys

The app includes mock product data, so you can:
- Browse products
- Add items to cart
- View cart
- Navigate all pages

For full functionality including checkout:
1. Get a Stripe test account (free): https://stripe.com
2. Add test keys to `.env.local`
3. Use Stripe test cards: https://stripe.com/docs/testing

## 📱 Pages Overview

1. **Home** (`/`) - Hero section, featured products, brand values, newsletter
2. **Shop** (`/shop`) - Product grid with category filters
3. **Product Detail** (`/product/[id]`) - Images, description, size selector, add to cart
4. **Cart** (`/cart`) - Cart items, quantity controls, proceed to checkout
5. **Checkout** (`/checkout`) - Order summary, Stripe redirect
6. **Success** (`/success`) - Order confirmation after payment
7. **About** (`/about`) - Brand story and values
8. **Privacy Policy** (`/privacy-policy`) - Complete privacy policy
9. **Terms of Service** (`/terms-of-service`) - Complete terms
10. **Return Policy** (`/return-policy`) - Complete return policy

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Payments**: Stripe
- **Products**: Printful API
- **Icons**: Lucide React
- **State**: React Context API

## ✨ Next Steps

1. Add your API keys to `.env.local`
2. Customize mock products in `src/app/api/products/route.ts`
3. Set up Stripe webhook endpoint in production
4. Deploy to Vercel, Netlify, or your preferred platform
5. Configure custom domain
6. Add analytics (Google Analytics, Plausible, etc.)
7. Set up email notifications for orders

## 📝 Notes

- Build completed successfully ✅
- All TypeScript types are correct ✅
- Mobile responsive ✅
- SEO metadata included ✅
- Professional legal pages ✅
- Cart persists across sessions ✅

## 🆘 Support

For questions or issues:
- Check the README.md for detailed documentation
- Review the code comments
- Test with Stripe test mode first
- Verify all environment variables are set

Happy selling! 🎉
