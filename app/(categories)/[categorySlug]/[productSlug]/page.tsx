import Product from "@/components/Product/MainProduct/Product";
import ProductDetails from "@/components/Product/ProductDetails/ProductDetails";
import {
  getProducts,
  isCorrectCategory,
} from "@/lib/utils/products/productsUtils";

type Props = {
  params: { productSlug: string; categorySlug: string };
};

export default function page({ params: { productSlug, categorySlug } }: Props) {
  return (
    <section className="max my-[64px] flex flex-col gap-[120px] sm:my-[120px] lg:my-40">
      <Product productSlug={productSlug} categorySlug={categorySlug} />
      <ProductDetails productSlug={productSlug} />
      {/* <Others others={others} />  */}
      {/* <ProductGallery gallery={gallery} /> */}
    </section>
  );
}

export async function generateMetadata({
  params: { productSlug, categorySlug },
}: Props) {
  const product = await isCorrectCategory(productSlug, categorySlug);

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
