import Image from "next/image";
import Counter from "../UI/Counter";
import { formatter } from "@/lib/utils/products/productsUtils";
import ButtonOnClick from "../UI/ButtonOnClick";
import ProductCounter from "./ProductCounter";

type Props = {
  name: string;
  description: string;
  price: number;
  id: number;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  isNewProduct?: boolean;
};

export default function Product({
  name,
  description,
  price,
  isNewProduct,
  id,
  image: { mobile, tablet, desktop },
}: Props) {
  




  return (
    <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:gap-5">
      <Image
        width={540}
        height={560}
        alt={`${name} image`}
        quality={100}
        className="hidden rounded-lg lg:inline-block"
        src={desktop}
      />
      <Image
        width={562}
        height={960}
        alt={`${name} image`}
        quality={100}
        className="hidden max-h-[480px] max-w-[380px] rounded-lg object-cover sm:inline-block lg:hidden"
        src={tablet}
      />
      <Image
        quality={100}
        width={654}
        alt={`${name} image`}
        src={mobile}
        height={704}
        className="inline-block min-h-[380px] rounded-lg object-cover sm:hidden"
      />

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
        <p>{formatter.format(price)}</p>

        <ProductCounter id={id} name={name} price={price} />
      </div>
    </div>
  );
}
