import { Manrope } from "next/font/google";
import "./globals.css";
import CartContextProvider from "@/contexts/CartContextProvider";
import { mainMetaData } from "../meta/mainMetaData";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = mainMetaData;

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
