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
    <section className="flex flex-col items-center justify-center gap-x-[30px] gap-y-[32px] sm:flex-row">
      <div className="flex w-full flex-col gap-y-[32px] sm:max-w-[445px]">
        <Image
          src={first.mobile}
          alt={"gallery photo"}
          width={654}
          height={348}
          quality={100}
          className="inline-block min-h-[174px] rounded-lg object-cover sm:hidden"
        />

        <Image
          src={second.mobile}
          alt={"gallery photo"}
          width={654}
          height={348}
          quality={100}
          className="inline-block min-h-[174px] rounded-lg object-cover sm:hidden"
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
    </section>
  );
}
