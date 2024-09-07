import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import CartContextProvider from "@/contexts/CartContextProvider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SoundGear",
  description:
    "Selling headphones, speakers, earphones, and related audio equipment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <CartContextProvider>{children}</CartContextProvider>
      </body>
    </html>
  );
}
