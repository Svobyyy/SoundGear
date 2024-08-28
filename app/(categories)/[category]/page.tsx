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

  return (
    <>
      <h2 className="py-8 sm:py-[98px] bg-black text-white text-center">{category}</h2>
      <section className="max my-[64px] flex flex-col gap-[120px] sm:my-[120px] lg:my-40">
        {products.map(
          ({ name, description, categoryImage, slug, isNew }, index) => {
            return (
              <ProductShowCase
                category={category}
                key={name}
                name={name}
                description={description}
                image={categoryImage}
                slug={slug}
                isNew={isNew}
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
    category: product.category,
  }));
}
