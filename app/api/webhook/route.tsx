import Stripe from "stripe";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import UserOrderModel from "../../../lib/models/UserOrderModel";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Stripe secret key not found");
}
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST(req: Request) {
  const body = await req.text();

  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (e) {
    return new NextResponse("Invalid signature", { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const metadata = session.metadata;

  // Save the order and User's Information to the database

  if (
    event.type === "checkout.session.completed" &&
    metadata &&
    metadata.data &&
    metadata.cart
  ) {
    const cart = metadata ? JSON.parse(metadata.cart) : null;
    const data = metadata ? JSON.parse(metadata.data) : null;

    const newOrder = new UserOrderModel({
      cart,
      payment: {
        emailAddress: data["email-address"],
        name: data.name,
        phoneNumber: data["phone-number"],
        payment: data.payment,
        address: data.address,
        city: data.city,
        country: data.country,
        zipCode: data["zip-code"],
      },
    });

    await newOrder.save();
  }

  return new NextResponse("OK", { status: 200 });
}
