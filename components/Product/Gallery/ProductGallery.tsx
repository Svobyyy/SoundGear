import { getProduct } from "@/lib/utils/products/productsUtils";
import Image from "next/image";

type Props = {
  productSlug: string;
};

export default async function ProductGallery({ productSlug }: Props) {
  const {
    gallery: { first, second, third },
  } = await getProduct("slug", productSlug);

  return (
    <div className="grid grid-cols-[minmax(280px,445px)_minmax(380px,635px)] gap-x-[30px] gap-y-[32px]">
      <Image
        src={first.desktop}
        alt={"gallery photo"}
        width={445}
        height={280}
        quality={100}
        className="col-start-1 row-start-1 h-full object-cover"
      />
      <Image
        src={second.desktop}
        alt={"gallery photo"}
        width={445}
        height={280}
        quality={100}
        className="col-start-1 row-start-2 h-full object-cover"
      />
      <Image
        src={third.desktop}
        alt={"gallery photo"}
        width={635}
        height={592}
        quality={100}
        className="col-start-2 row-span-2 h-full object-cover"
      />
    </div>
  );
}
