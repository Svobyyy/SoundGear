import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NotFoundComp from "@/components/NotFound/NotFoundComp";
import Wrapper from "@/components/UI/Wrapper";
import { Metadata } from "next";

export default function NotFound() {
  return (
    <Wrapper>
      <Header />
      <NotFoundComp />
      <Footer />
    </Wrapper>
  );
}

export const metadata: Metadata = {
  title: "Soundgear: Page Not Found",
  description: "The page you are looking for cannot be found on Soundgear.",
};
