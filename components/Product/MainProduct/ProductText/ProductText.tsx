import { formatter, getProduct } from "@/lib/utils/products/productsUtils";

import NewProduct from "./NewProduct";
import ProductCounter from "./ProductCounter";

type Props = {
  slug: string;
};

export default async function ProductText({ slug }: Props) {
  const { id, name, price, description, isNewProduct } = await getProduct(
    "slug",
    slug,
  );

  return (
    <div className="flex max-w-[572px] flex-col items-start sm:max-w-[445px]">
      {isNewProduct && <NewProduct />}
      <h2 className="max-w-[200px] sm:max-w-[400px] sm:text-[28px] maintab:text-[40px]">
        {name}
      </h2>
      <p className="mb-6 mt-6 opacity-50 sm:mt-8 lg:mb-10">{description}</p>
      <p className="mb-12 text-[18px] font-bold tracking-[1.29px]">
        {formatter.format(price)}
      </p>

      <ProductCounter id={id} name={name} price={price} />
    </div>
  );
}
