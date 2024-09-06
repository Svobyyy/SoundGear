import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <div>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Image
          src="/shared/desktop/error.png"
          alt="Not Found"
          quality={100}
          width={250}
          height={250}
        />
        <Link href="/">Return Home</Link>
      </div>
      <Footer />
    </>
  );
}