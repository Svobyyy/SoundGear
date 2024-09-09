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
    <section className="flex flex-col gap-x-[18px] gap-y-[20px] overflow-hidden sm:flex-row lg:gap-x-[30px] lg:gap-y-[32px]">
      <div className="flex flex-col gap-y-[32px]">
        <Image
          src={first.mobile}
          alt={"gallery photo"}
          width={654}
          height={348}
          quality={100}
          className="inline-block min-h-[174px] rounded-lg object-cover sm:hidden"
        />
        <Image
          src={first.tablet}
          alt={"gallery photo"}
          width={554}
          height={348}
          quality={100}
          className="hidden flex-1 rounded-lg object-cover sm:inline-block lg:hidden"
        />

        <Image
          src={second.mobile}
          alt={"gallery photo"}
          width={654}
          height={348}
          quality={100}
          className="inline-block min-h-[174px] rounded-lg object-cover sm:hidden"
        />
        <Image
          src={second.tablet}
          alt={"gallery photo"}
          width={554}
          height={348}
          quality={100}
          className="hidden flex-1 rounded-lg object-cover sm:inline-block lg:hidden"
        />
      </div>

      <Image
        src={third.mobile}
        alt={"gallery photo"}
        width={654}
        height={736}
        quality={100}
        className="inline-block min-h-[368px] w-full max-w-[635px] rounded-lg object-cover sm:hidden"
      />

      <Image
        src={third.tablet}
        alt={"gallery photo"}
        width={790}
        height={736}
        quality={100}
        className="hidden min-h-[368px] max-w-[60%] rounded-lg object-cover sm:inline-block lg:hidden"
      />
    </section>
  );
}
