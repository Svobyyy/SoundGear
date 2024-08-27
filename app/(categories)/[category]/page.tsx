import ProductShowCase from "@/components/Category/ProductShowCase";
import {
  getProducts,
  getProductsByCategory,
} from "@/lib/utils/products/productsUtils";

export default async function Category({
  params: { category },
}: {
  params: { category: string };
}) {
  const products = await getProductsByCategory(category);
  console.log(products);

  return (
    <section className="max my-40 flex flex-col gap-[120px]">
      {products.map(({ name, description, categoryImage, slug, isNew }) => {
        return (
          <ProductShowCase
            name={name}
            description={description}
            image={categoryImage}
            slug={slug}
            isNew={isNew}
          />
        );
      })}
    </section>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    category: product.category,
  }));
}
