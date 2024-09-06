import { getProduct } from "@/lib/utils/products/productsUtils";
import Features from "./Features";
import Includes from "./Includes";

type Props = {
  productSlug: string;
};

export default async function ProductDetails({ productSlug }: Props) {
  const { features, includes } = await getProduct("slug", productSlug);

  return (
    <section className="flex w-full max-w-[934px] flex-col justify-between gap-[120px] tab:flex-row tab:gap-5">
      <Features features={features} />
      <Includes includes={includes} />
    </section>
  );
}
