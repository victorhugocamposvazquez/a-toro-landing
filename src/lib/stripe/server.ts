import "server-only";

import Stripe from "stripe";

const secret = process.env.STRIPE_SECRET_KEY;

if (!secret) {
  console.warn(
    "[stripe] STRIPE_SECRET_KEY is not set. Payment features will be disabled until configured.",
  );
}

export const stripe = secret
  ? new Stripe(secret, {
      // Pin to a known API version. Update intentionally.
      apiVersion: "2026-04-22.dahlia",
      typescript: true,
      appInfo: {
        name: "atoro",
      },
    })
  : (null as unknown as Stripe);

export const isStripeEnabled = Boolean(secret);
