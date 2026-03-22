# Belle Martinée - Luxury Fashion E-Commerce Store

A modern, professional e-commerce store built with Next.js 14, featuring luxury fashion products with integrated Stripe payments and Printful print-on-demand fulfillment.

## 🌟 Features

- **Modern Tech Stack**: Built with Next.js 14 App Router, TypeScript, and Tailwind CSS
- **Stripe Integration**: Secure payment processing with Stripe Checkout
- **Printful Integration**: Print-on-demand fulfillment for sustainable fashion
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Cart Management**: Persistent shopping cart with local storage
- **Product Catalog**: Dynamic product pages with variants and sizes
- **Legal Pages**: Complete privacy policy, terms of service, and return policy

## 🎨 Brand Identity

- **Name**: Belle Martinée
- **Tagline**: Wear Your Story
- **Colors**: 
  - Primary Gold: `#F5C842`
  - Background: `#0a0a0a`
  - Surface: `#1a1a1a`
- **Style**: Elegant, luxury fashion with gold script branding

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bellemartineebusiness/Belle-Martine-.git
cd Belle-Martine-
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Edit `.env.local` and add your API keys:
   - Get Stripe keys from: https://dashboard.stripe.com/test/apikeys
   - Get Printful API key from: https://www.printful.com/dashboard/settings
   - Set your site URL (use `http://localhost:3000` for development)

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── products/      # Products listing
│   │   ├── product/[id]/  # Single product
│   │   ├── checkout/      # Stripe checkout session
│   │   └── webhook/       # Stripe webhook handler
│   ├── shop/              # Shop page
│   ├── product/[id]/      # Product detail page
│   ├── cart/              # Cart page
│   ├── checkout/          # Checkout page
│   ├── success/           # Order success page
│   ├── about/             # About page
│   ├── privacy-policy/    # Privacy policy
│   ├── terms-of-service/  # Terms of service
│   ├── return-policy/     # Return policy
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer
│   ├── ProductCard.tsx    # Product card
│   ├── CartContext.tsx    # Cart state management
│   ├── CartDrawer.tsx     # Sliding cart drawer
│   └── LoadingSpinner.tsx # Loading component
└── lib/                   # Utility functions
    ├── types.ts           # TypeScript types
    ├── stripe.ts          # Stripe client
    └── printful.ts        # Printful API client
```

## 🔐 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Printful
PRINTFUL_API_KEY=your_printful_api_key_here

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🛒 Features Overview

### Shopping Experience
- Browse products by category
- View detailed product information
- Select sizes and variants
- Add items to cart with quantity selection
- Persistent cart across sessions

### Checkout Process
1. Review cart items
2. Proceed to secure Stripe Checkout
3. Enter shipping and payment information
4. Complete purchase
5. Receive order confirmation

### Mock Data
The app includes mock product data that works without API keys configured. This allows you to:
- Test the complete shopping flow
- Demo the site functionality
- Develop without external dependencies

## 🎨 Customization

### Brand Colors
Update colors in `tailwind.config.ts` and `src/app/globals.css`:
```css
--primary: #F5C842;
--background: #0a0a0a;
--surface: #1a1a1a;
```

### Products
- **With Printful**: Products are fetched from your Printful store
- **Without Printful**: Mock products are displayed (see `src/app/api/products/route.ts`)

## 📦 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy

### Other Platforms
The app can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted

## 🔄 Stripe Webhook Setup

For production, configure Stripe webhooks:

1. Go to Stripe Dashboard > Webhooks
2. Add endpoint: `https://yourdomain.com/api/webhook`
3. Select events: `checkout.session.completed`, `payment_intent.succeeded`
4. Copy webhook secret to `STRIPE_WEBHOOK_SECRET`

## 📄 License

This project is licensed under the ISC License.

## 🤝 Support

For questions or support:
- Email: support@bellemartinee.com
- Issues: GitHub Issues

## 🙏 Acknowledgments

- Powered by [Printful](https://www.printful.com) for print-on-demand
- Payments by [Stripe](https://stripe.com)
- Built with [Next.js](https://nextjs.org)
