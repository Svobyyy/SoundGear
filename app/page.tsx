import Categories from "@/components/CategoriesBoxes/Categories";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ProductBoxes from "@/components/Home/ProductBoxes";
import {
  primaryHomeBox,
  quaternaryHomeBox,
  secondaryHomeBox,
  tertiaryHomeBox,
} from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Header background />
      <Categories />
      <section className="max">
        <ProductBoxes info={primaryHomeBox} />
        {/* <ProductBoxes info={secondaryHomeBox} />
        <ProductBoxes info={tertiaryHomeBox} />
        <ProductBoxes info={quaternaryHomeBox} /> */}
      </section>
      <Footer bestaudio />
    </>
  );
}
