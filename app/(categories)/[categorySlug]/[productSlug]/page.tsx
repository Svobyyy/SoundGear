import Includes from "@/components/Product/Includes/Includes";
import Product from "@/components/Product/MainProduct/Product";
import Others from "@/components/Product/Others/Others";
import {
  getProduct,
  getProducts,
  isCorrectCategory,
} from "@/lib/utils/products/productsUtils";

type Props = {
  params: { productSlug: string; categorySlug: string };
};

export default async function page({
  params: { productSlug, categorySlug },
}: Props) {
  const product = await isCorrectCategory(productSlug, categorySlug);

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

  return (
    <section className="max my-[64px] flex flex-col gap-[120px] sm:my-[120px] lg:my-40">
      <Product
        productSlug={productSlug}
        name={name}
        description={description}
        price={price}
        image={image}
        isNewProduct={isNewProduct}
        id={id}
        category={categorySlug}
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
