import Categories from "@/components/UI/CategoriesBoxes/Categories";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ProductBoxes from "@/components/Home/ProductBoxes/ProductBoxes";

export default function Home() {
  return (
    <>
      <Header background />
      <Categories />
      <ProductBoxes />
      <Footer bestaudio />
    </>
  );
}
