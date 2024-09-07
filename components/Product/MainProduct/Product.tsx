import ProductImages from "./ProductImages";
import ProductText from "./ProductText";
import ProductGoBack from "./ProductGoBack";

type Props = {
  productSlug: string;
  categorySlug: string;
};

export default function Product({ productSlug, categorySlug }: Props) {
  return (
    <section>
      <ProductGoBack category={categorySlug} />
      <main className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:gap-5">
        <ProductImages slug={productSlug} />
        <ProductText slug={productSlug} />
      </main>
    </section>
  );
}
