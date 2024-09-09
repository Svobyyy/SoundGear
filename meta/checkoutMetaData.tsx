import { SITE_URL } from "@/lib/constants";
import { Metadata } from "next";

export const checkoutMetaData: Metadata = {
  title: "Checkout",
  description:
    "Complete your purchase of high-quality audio products. Review your cart and enter payment details securely.",
  openGraph: {
    title: "Checkout - SoundGear: High-Quality Audio Products",
    description:
      "Finalize your order for premium audio products from SoundGear. Secure and easy checkout process.",
    url: SITE_URL + "/checkout",
  },
};
