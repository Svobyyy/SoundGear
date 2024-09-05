import ProductGallery from "@/components/Product/Gallery/ProductGallery";
import Includes from "@/components/Product/Includes/Includes";
import Product from "@/components/Product/MainProduct/Product";
import Others from "@/components/Product/Others/Others";
import { getProduct, getProducts } from "@/lib/utils/products/productsUtils";
import { notFound } from "next/navigation";

type Props = {
  params: { productSlug: string; categorySlug: string };
};

export default async function page({
  params: { productSlug, categorySlug },
}: Props) {
  const product: Product = await getProduct("slug", productSlug);
  const {
    name,
    isNewProduct,
    description,
    price,
    image,
    id,
    gallery,
    category,
    includes,
    features,
    others,
  } = product;
  if (category !== categorySlug) notFound();

  return (
    <section className="max my-[64px] flex flex-col gap-[120px] sm:my-[120px] lg:my-40">
      <Product
        name={name}
        description={description}
        price={price}
        image={image}
        isNewProduct={isNewProduct}
        id={id}
      />
      <Includes includes={includes} features={features} />
      <Others others={others} />
      {/* <ProductGallery gallery={gallery} /> */}
    </section>
  );
}

export async function generateMetadata({
  params: { productSlug, categorySlug },
}: Props) {
  const product: Product = await getProduct("slug", productSlug);
  if (product.category !== categorySlug) notFound();

  return {
    title: product.name,
    openGraph: {
      title: `${product.name} | SoundGear`,
      description: product.description,
    },
  };
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    productSlug: product.slug,
  }));
}
