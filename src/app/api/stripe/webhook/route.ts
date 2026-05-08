import { NextResponse, type NextRequest } from "next/server";
import type Stripe from "stripe";

import { isStripeEnabled, stripe } from "@/lib/stripe/server";
import { createAdminClient } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  if (!isStripeEnabled) {
    return new NextResponse("Stripe not configured", { status: 503 });
  }

  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return new NextResponse("Missing signature", { status: 400 });
  }

  const payload = await request.text();
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Invalid signature";
    return new NextResponse(`Webhook Error: ${message}`, { status: 400 });
  }

  const supabase = createAdminClient();

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.client_reference_id ?? session.metadata?.user_id;
        const subscriptionId =
          typeof session.subscription === "string"
            ? session.subscription
            : null;

        if (userId && subscriptionId) {
          await supabase.from("subscriptions").upsert(
            {
              client_id: userId,
              stripe_subscription_id: subscriptionId,
              status: "active",
            },
            { onConflict: "stripe_subscription_id" },
          );
        }
        break;
      }

      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        await supabase
          .from("subscriptions")
          .update({
            status: sub.status,
            // Stripe types: current_period_end is a unix seconds timestamp.
            current_period_end: new Date(
              (sub as unknown as { current_period_end: number })
                .current_period_end * 1000,
            ).toISOString(),
          })
          .eq("stripe_subscription_id", sub.id);
        break;
      }

      default:
        // ignore other events for now
        break;
    }
  } catch (err) {
    console.error("[stripe.webhook] handler error", err);
    return new NextResponse("Handler error", { status: 500 });
  }

  return NextResponse.json({ received: true });
}
