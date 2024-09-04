import { formatter } from "@/lib/utils/products/productsUtils";
import ProductCounter from "./ProductCounter";

type Props = {
  isNewProduct?: boolean;
  name: string;
  description?: string;
  price: number;
  id: number;
};

export default function ProductText({
  isNewProduct,
  name,
  description,
  price,
  id,
}: Props) {
  return (
    <div className="flex max-w-[572px] flex-col items-start sm:max-w-[445px]">
      {isNewProduct && (
        <p className="mb-6 text-[14px] tracking-[10px] text-orange sm:mb-4">
          NEW PRODUCT
        </p>
      )}
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
