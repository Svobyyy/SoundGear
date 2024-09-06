import Button from "@/components/UI/Button";
import { getProduct } from "@/lib/utils/products/productsUtils";

type Props = {
  slug: string;
};

export default async function ShowCaseText({ slug }: Props) {
  const { isNewProduct, name, description, category } = await getProduct(
    "slug",
    slug,
  );

  return (
    <div className="flex max-w-[572px] flex-col items-center lg:max-w-[445px] lg:items-start">
      {isNewProduct && (
        <p className="mb-6 text-[14px] tracking-[10px] text-orange sm:mb-4">
          NEW PRODUCT
        </p>
      )}
      <h2 className="max-w-[200px] sm:max-w-[400px]">{name}</h2>
      <p className="mb-6 mt-6 opacity-50 sm:mt-8 lg:mb-10">{description}</p>
      <Button text="SEE PRODUCT" navigateTo={`${category}/${slug}`} maxWidth />
    </div>
  );
}
