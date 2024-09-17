"use server";

import { redirect } from "next/navigation";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export const StripePayment = async (cart: CartItem[], email: string) => {

    

  const StripeProducts = cart.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    line_items: StripeProducts,
    mode: "payment",
    success_url: `http://localhost:3000/checkout`,
    cancel_url: `http://localhost:3000/`,
    customer_email: email,
  });
  if (session.url) {
    redirect(session.url);
  }
};
