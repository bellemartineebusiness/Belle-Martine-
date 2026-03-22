import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { createOrder } from '@/lib/printful';
import Stripe from 'stripe';

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;

        console.log('Payment successful:', session.id);
        console.log('Customer email:', session.customer_details?.email);
        console.log('Amount total:', session.amount_total);

        // Retrieve the session with expanded line items and product metadata
        const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
          expand: ['line_items', 'line_items.data.price.product'],
        });

        const shippingAddress = session.collected_information?.shipping_details?.address;
        const customerEmail = session.customer_details?.email;
        const customerName = session.customer_details?.name;

        if (shippingAddress && fullSession.line_items?.data?.length) {
          const printfulItems = fullSession.line_items.data
            .map((item) => {
              const product = item.price?.product as Stripe.Product | null;
              const variantId = product?.metadata?.variantId;
              if (!variantId) return null;
              return {
                sync_variant_id: parseInt(variantId, 10),
                quantity: item.quantity ?? 1,
              };
            })
            .filter(
              (item): item is { sync_variant_id: number; quantity: number } =>
                item !== null && !isNaN(item.sync_variant_id)
            );

          if (printfulItems.length > 0 && process.env.PRINTFUL_API_KEY) {
            try {
              const printfulOrder = await createOrder({
                recipient: {
                  name: customerName ?? 'Customer',
                  email: customerEmail ?? '',
                  address1: shippingAddress.line1 ?? '',
                  address2: shippingAddress.line2 ?? '',
                  city: shippingAddress.city ?? '',
                  state_code: shippingAddress.state ?? '',
                  country_code: shippingAddress.country ?? '',
                  zip: shippingAddress.postal_code ?? '',
                },
                items: printfulItems,
              });
              console.log('Printful order created:', printfulOrder?.id);
            } catch (printfulError) {
              console.error('Failed to create Printful order:', printfulError);
              // Do not return an error — log and continue so Stripe does not retry
            }
          }
        }

        break;
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('PaymentIntent succeeded:', paymentIntent.id);
        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('PaymentIntent failed:', paymentIntent.id);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error('Error processing webhook:', err);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
