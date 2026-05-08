"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import { isStripeEnabled, stripe } from "@/lib/stripe/server";
import { getPublicSiteUrl } from "@/lib/public-site-url";

type CreateCheckoutInput = {
  priceId: string;
  mode?: "subscription" | "payment";
};

/**
 * Server Action that creates a Stripe Checkout Session for the current user
 * and redirects them to the hosted Stripe page.
 */
export async function createCheckoutSession({
  priceId,
  mode = "subscription",
}: CreateCheckoutInput) {
  if (!isStripeEnabled) {
    throw new Error("Stripe is not configured. Set STRIPE_SECRET_KEY.");
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login?next=/app");
  }

  const siteUrl = getPublicSiteUrl();

  const session = await stripe.checkout.sessions.create({
    mode,
    customer_email: user.email,
    client_reference_id: user.id,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${siteUrl}/app?checkout=success`,
    cancel_url: `${siteUrl}/app?checkout=cancelled`,
    allow_promotion_codes: true,
    metadata: {
      user_id: user.id,
    },
  });

  if (!session.url) {
    throw new Error("Stripe did not return a checkout URL.");
  }

  redirect(session.url);
}
