import Categories from "@/components/CategoriesBoxes/Categories";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ProductBoxes from "@/components/Home/ProductBoxes/ProductBoxes";
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
      <section className="max mt-[120px] sm:mt-[96px] lg:mt-[170px]">
        <ProductBoxes info={primaryHomeBox} />
        <ProductBoxes info={secondaryHomeBox} />

        <div className="flex gap-3">
          <ProductBoxes info={tertiaryHomeBox} />
          <ProductBoxes info={quaternaryHomeBox} />
        </div>
      </section>
      <Footer bestaudio />
    </>
  );
}
