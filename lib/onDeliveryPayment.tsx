"use server";

import { redirect } from "next/navigation";
import connectMongo from "./utils/db/connectMongo";
import ProductsModel from "./models/ProductsModel";
import { paymentSchema, PaymentSchema } from "./types/formTypes";
import UserOrderModel from "@/lib/models/UserOrderModel";

export const onDeliveryPayment = async (
  cart: CartItem[],
  data: PaymentSchema,
) => {
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

  redirect("/checkout?checkout=success");
};
