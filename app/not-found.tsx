import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import NotFoundComp from "@/components/NotFound/NotFoundUI";
import Wrapper from "@/components/UI/Wrapper";
import { notFoundMetaData } from "@/meta/notFoundMetaData";

export default function NotFound() {
  return (
    <Wrapper>
      <Header />
      <NotFoundComp />
      <Footer />
    </Wrapper>
  );
}

export const metadata = notFoundMetaData;
