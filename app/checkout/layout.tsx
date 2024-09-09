import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { checkoutMetaData } from "@/meta/checkoutMetaData";

export const metadata = checkoutMetaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
