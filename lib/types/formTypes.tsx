import { z } from "zod";

const phoneRegex = /^\+?[1-9]\d{1,14}$/;
const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s\-']{2,}$/;
const zipCodeRegex = /^[A-Za-z0-9\s\-]{4,10}$/;

export const paymentSchema = z.object({
  "email-address": z.string().email("Incorrect email"),
  name: z.string().regex(nameRegex, "Name not valid"),
  "phone-number": z.string().regex(phoneRegex, "Phone number not valid"),
  payment: z.enum(["e-money", "cash-on-delivery"]),
  address: z.string().min(5, "Address is too short"),
  city: z.string().min(2, "City is too short"),
  country: z.string().min(2, "Country is too short"),
  "zip-code": z.string().regex(zipCodeRegex, "Wrong zip code"),
});

export type PaymentSchema = z.infer<typeof paymentSchema>;

export type PaymentLabel =
  | "email-address"
  | "name"
  | "phone-number"
  | "payment"
  | "address"
  | "city"
  | "country"
  | "zip-code";
