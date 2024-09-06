import Link from "next/link";
import ProductImages from "./ProductImages";
import ProductText from "./ProductText";

type Props = {
  productSlug: string;
  categorySlug: string;
};

export default function Product({ productSlug, categorySlug }: Props) {
  return (
    <div>
      <Link href={`/${categorySlug}`}>
        <p className="mb-[24px] opacity-50 tab:mb-[56px]">Go Back</p>
      </Link>
      <section className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:gap-5">
        <ProductImages slug={productSlug} />
        <ProductText slug={productSlug} />
      </section>
    </div>
  );
}
