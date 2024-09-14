import { z } from "zod";

type ImageSizes = {
  mobile: string;
  tablet: string;
  desktop: string;
};

type ProductIncludeItem = {
  quantity: number;
  item: string;
};

type ProductGallery = {
  first: ImageSizes;
  second: ImageSizes;
  third: ImageSizes;
};

type Others = {
  slug: string;
  name: string;
  image: ImageSizes;
};

type Product = {
  id: number;
  slug: string;
  name: string;
  image: ImageSizes;
  category: string;
  categoryImage: ImageSizes;
  isNewProduct: boolean;
  price: number;
  description: string;
  features: string;
  includes: ProductIncludeItem[];
  gallery: ProductGallery;
  others: Others[];
};

type homeProduct = {
  info: {
    name?: string;
    description?: string;
    image?: {
      desktop?: {
        source: string;
        width: number;
        height: number;
      };
      tablet?: {
        source: string;
        width: number;
        height: number;
      };
      mobile?: {
        source: string;
        width: number;
        height: number;
      };
    };
    category?: string;
    slug?: string;
  };
};

type CartItem = {
  id: Product["id"];
  name: Product["name"];
  price: Product["price"];
  quantity: number;
};

type CartCounterProps = {
  id: Product["id"];
  name: Product["name"];
  price: Product["price"];
};

type CartItemProps = {
  id: Product["id"];
  name: Product["name"];
  price: Product["price"];
  quantity: number;
};

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
