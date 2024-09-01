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

        <div className="my-6 sm:my-8 lg:my-12">
          <ProductBoxes info={secondaryHomeBox} />
        </div>

        <div className="flex h-full min-h-[424px] flex-col gap-3 tab:min-h-0 tab:flex-row">
          <ProductBoxes info={tertiaryHomeBox} smallBoxes />
          <ProductBoxes info={quaternaryHomeBox} smallBoxes />
        </div>
      </section>
      <Footer bestaudio />
    </>
  );
}
