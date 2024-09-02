import { getProduct, getProducts } from "@/lib/utils/products/productsUtils";
import { notFound } from "next/navigation";

type Props = {
  params: { productSlug: string; category: string };
};

export default async function page({
  params: { productSlug, category },
}: Props) {
  const product = await getProduct("slug", productSlug);
  if (product.category !== category) notFound();

  return <div>page</div>;
}

export async function generateMetadata({
  params: { productSlug, category },
}: Props) {
  const product: Product = await getProduct("slug", productSlug);
  if (product.category !== category) notFound();

  return {
    title: product.name,
  };
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    productSlug: product.slug,
  }));
}
