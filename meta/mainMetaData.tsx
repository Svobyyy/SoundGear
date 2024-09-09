import { SITE_URL } from "@/lib/constants";
import { Metadata } from "next";

export const mainMetaData: Metadata = {
  title: {
    default: "SoundGear",
    template: "SoundGear: %s",
  },
  description:
    "Explore our range of high-quality audio products including headphones, speakers, and earphones.",
  openGraph: {
    title: "SoundGear: High-Quality Audio Products",
    description:
      "Explore our range of high-quality audio products including headphones, speakers, and earphones.",
    type: "website",
    url: SITE_URL,
    siteName: "SoundGear",
  },
};
