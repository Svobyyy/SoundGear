"use server";

import { redirect } from "next/navigation";
import Stripe from "stripe";
import connectMongo from "./utils/db/connectMongo";
import ProductsModel from "./models/productsModel";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Stripe secret key not found");
}
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export const StripePayment = async (cart: CartItem[], email: string) => {
  await connectMongo();

  const productIds = cart.map(({ id }) => id);
  const products = await ProductsModel.find({ id: { $in: productIds } });

  // Product validation

  cart.forEach(({ id, name, price }) => {
    const product = products.find((p) => p.id === id);
    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    if (product.price !== price) {
      throw new Error(
        `Price mismatch for product ${name}: expected ${price}, got ${product.price}`,
      );
    }
  });

  const StripeProducts = cart.map(({ name, quantity, price }) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name,
      },
      unit_amount: price * 100,
    },
    quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    line_items: StripeProducts,
    mode: "payment",
    success_url: `http://localhost:3000/checkout`,
    cancel_url: `http://localhost:3000/checkout`,
    customer_email: email,
  });
  if (session.url) {
    redirect(session.url);
  }
  throw new Error("Failed to create Stripe session");
};
