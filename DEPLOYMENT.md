# Deployment Guide - Belle Martinée

## Quick Deploy to Vercel (Recommended)

Vercel is the recommended platform for deploying Next.js applications.

### Steps:

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Complete e-commerce store"
   git push
   ```

2. **Visit Vercel**:
   - Go to https://vercel.com
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your `Belle-Martine-` repository

3. **Configure Environment Variables**:
   In Vercel's project settings, add these environment variables:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   PRINTFUL_API_KEY=...
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

4. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `https://your-project.vercel.app`

5. **Set up Stripe Webhook**:
   - Go to Stripe Dashboard > Webhooks
   - Add endpoint: `https://your-domain.vercel.app/api/webhook`
   - Select events: `checkout.session.completed`, `payment_intent.succeeded`
   - Copy webhook secret and update `STRIPE_WEBHOOK_SECRET` in Vercel

## Alternative: Deploy to Netlify

1. **Push code to GitHub**

2. **Visit Netlify**:
   - Go to https://netlify.com
   - Click "Add new site" > "Import existing project"
   - Connect to GitHub and select your repository

3. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`

4. **Environment Variables**:
   Add the same variables as Vercel

5. **Deploy**:
   - Click "Deploy site"
   - Update `NEXT_PUBLIC_SITE_URL` with your Netlify URL
   - Set up Stripe webhook with Netlify URL

## Self-Hosted Deployment

### Using PM2 on VPS:

1. **Install Node.js and PM2 on your server**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   sudo npm install -g pm2
   ```

2. **Clone repository**:
   ```bash
   git clone https://github.com/your-username/Belle-Martine-.git
   cd Belle-Martine-
   ```

3. **Install dependencies and build**:
   ```bash
   npm install
   npm run build
   ```

4. **Create .env.local**:
   ```bash
   cp .env.local.example .env.local
   nano .env.local  # Add your API keys
   ```

5. **Start with PM2**:
   ```bash
   pm2 start npm --name "belle-martinee" -- start
   pm2 save
   pm2 startup
   ```

6. **Set up Nginx reverse proxy**:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Docker Deployment

### Create Dockerfile:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

### Build and run:
```bash
docker build -t belle-martinee .
docker run -p 3000:3000 --env-file .env.local belle-martinee
```

## Environment Setup Checklist

Before deploying to production:

- [ ] Update `NEXT_PUBLIC_SITE_URL` to your production domain
- [ ] Use production Stripe keys (not test keys)
- [ ] Set up Stripe webhook with production URL
- [ ] Configure Printful API key
- [ ] Test checkout flow end-to-end
- [ ] Set up custom domain (if using Vercel/Netlify)
- [ ] Configure SSL certificate (usually automatic)
- [ ] Test on mobile devices
- [ ] Set up monitoring/analytics
- [ ] Configure error tracking (Sentry, etc.)

## Post-Deployment

1. **Test the checkout flow**:
   - Add items to cart
   - Proceed to checkout
   - Complete payment with test card
   - Verify success page appears
   - Check Stripe dashboard for payment

2. **Monitor logs**:
   - Check for any errors
   - Verify webhook events are received
   - Monitor performance

3. **Configure DNS** (if using custom domain):
   - Point your domain to Vercel/Netlify
   - Wait for DNS propagation
   - Enable SSL

## Stripe Test Cards

For testing in production (with test keys):
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- Auth required: `4000 0027 6000 3184`

Use any future expiry date and any CVC.

## Troubleshooting

### Build fails:
- Check all environment variables are set
- Ensure Node.js version is 18+
- Clear `.next` folder and rebuild

### Checkout not working:
- Verify Stripe keys are correct
- Check `NEXT_PUBLIC_SITE_URL` is set correctly
- Test with Stripe test cards
- Check browser console for errors

### Images not loading:
- Verify image URLs in mock data
- Check Next.js image domains in `next.config.mjs`
- Ensure images are accessible

## Support

- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Stripe Docs: https://stripe.com/docs
- Printful API: https://developers.printful.com/

Good luck with your deployment! 🚀
