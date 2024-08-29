import { getProduct } from "@/lib/utils/products/productsUtils";
import Button from "../UI/Button";

export default async function NewProduct() {
  const { name, description, slug, category } = await getProduct(
    "slug",
    "xx99-mark-two-headphones",
  );

  return (
    <section className="paddings mt-[108px] flex w-full max-w-[1110px] justify-center sm:mt-[128px] sm:px-0 tab:justify-start">
      <div className="flex max-w-[378px] flex-col items-center justify-center text-center tab:items-start tab:justify-start tab:text-start">
        <p className="mb-6 text-[14px] tracking-[10px] text-white opacity-50 sm:mb-4">
          NEW PRODUCT
        </p>
        <h1 className="sm:max-w-[400px]">{name}</h1>
        <p className="my-7 opacity-50 sm:mb-10 sm:mt-6">{description}</p>
        <Button
          text="SEE PRODUCT"
          navigateTo={`${category}/${slug}`}
          maxWidth
        />
      </div>
    </section>
  );
}
