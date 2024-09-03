import ProductShowCase from "@/components/Category/ProductShowCase";
import {
  getProducts,
  getProductsByCategory,
} from "@/lib/utils/products/productsUtils";
import { notFound } from "next/navigation";

type Props = {
  params: { categorySlug: string };
};

export default async function Category({ params: { categorySlug } }: Props) {
  const products = await getProductsByCategory(categorySlug);

  if (products.length === 0) notFound();

  return (
    <>
      <h2 className="bg-black py-8 text-center text-white sm:py-[98px]">
        {categorySlug}
      </h2>
      <section className="max my-[64px] flex flex-col gap-[120px] sm:my-[120px] lg:my-40">
        {products.map(
          ({ name, description, categoryImage, slug, isNewProduct }, index) => {
            return (
              <ProductShowCase
                category={categorySlug}
                key={name}
                name={name}
                description={description}
                image={categoryImage}
                slug={slug}
                isNewProduct={isNewProduct}
                isOdd={index % 2 === 0 ? false : true}
              />
            );
          },
        )}
      </section>
    </>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    categorySlug: product.category,
  }));
}
