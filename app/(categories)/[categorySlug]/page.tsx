import { getProducts } from "@/lib/utils/products/productsUtils";
import CategoryTitle from "@/components/Category/CategoryTitle";
import ProductsShowCase from "@/components/Category/ProductsShowCase";

type Props = {
  params: { categorySlug: string };
};

export default function Category({ params: { categorySlug } }: Props) {
  return (
    <>
      <CategoryTitle categorySlug={categorySlug} />
      <ProductsShowCase slugCategory={categorySlug} />
    </>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    categorySlug: product.category,
  }));
}
