import ProductGallery from "@/components/Product/Gallery/ProductGallery";
import Product from "@/components/Product/MainProduct/Product";
import Others from "@/components/Product/Others/Others";
import ProductDetails from "@/components/Product/ProductDetails/ProductDetails";
import { getProducts } from "@/lib/utils/products/productsUtils";
import productMetaData from "@/meta/productMetaData";

type Props = {
  params: { productSlug: string; categorySlug: string };
};

export default function page({ params: { productSlug, categorySlug } }: Props) {
  return (
    <section className="max my-[64px] flex flex-col gap-[120px] sm:my-[120px] lg:my-40">
      <Product productSlug={productSlug} categorySlug={categorySlug} />
      <ProductDetails productSlug={productSlug} />
      <Others productSlug={productSlug} />
      <ProductGallery productSlug={productSlug} />
    </section>
  );
}

export async function generateMetadata({
  params: { productSlug, categorySlug },
}: Props) {
  productMetaData(productSlug, categorySlug);
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    productSlug: product.slug,
  }));
}
