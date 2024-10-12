"use server";

import { redirect } from "next/navigation";
import Stripe from "stripe";
import connectMongo from "./utils/db/connectMongo";
import ProductsModel from "@/lib/models/ProductsModel";
import { paymentSchema, PaymentSchema } from "./types/formTypes";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Stripe secret key not found");
}
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export const StripePayment = async (cart: CartItem[], data: PaymentSchema) => {
  await connectMongo();

  const formData = paymentSchema.safeParse(data);

  if (!formData.success) {
    throw new Error("The provided form details are invalid");
  }

  // Product's validation, validating ID and price of the product

  const productIds = cart.map(({ id }) => id);
  const products = await ProductsModel.find({ id: { $in: productIds } });

  cart.forEach(({ id, name, price }) => {
    const product = products.find((p) => p.id === id);

    if (!product)
      throw new Error(`Product's ${name} not found: ID missmatch, ${id}`);

    if (product.price !== price)
      throw new Error(
        `Price mismatch for product's ${name}: expected ${price}, got ${product.price}`,
      );
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
    success_url: `http://localhost:3000/checkout?checkout=success`,
    cancel_url: `http://localhost:3000/checkout?checkout=canceled`,
    customer_email: data["email-address"],
    metadata: {
      cart: JSON.stringify(cart),
      data: JSON.stringify(data),
    },
  });

  session.url && redirect(session.url);
};
