import { getProduct } from "@/lib/utils/products/productsUtils";
import Image from "next/image";
import React from "react";

type Props = {
  slug: string;
  isFirst: boolean;
};

export default async function ShowCaseImages({ slug, isFirst }: Props) {
  const {
    categoryImage: { desktop, tablet, mobile },
    name,
  } = await getProduct("slug", slug);

  return (
    <>
      <Image
        width={540}
        height={560}
        alt={`${name} image`}
        quality={100}
        priority={isFirst}
        className="hidden rounded-lg lg:inline-block"
        src={desktop}
      />
      <Image
        width={1378}
        height={704}
        alt={`${name} image`}
        quality={100}
        priority={isFirst}
        className="hidden min-h-[400px] rounded-lg object-cover sm:inline-block lg:hidden"
        src={tablet}
      />
      <Image
        quality={100}
        width={654}
        alt={`${name} image`}
        src={mobile}
        priority={isFirst}
        height={704}
        className="inline-block min-h-[380px] rounded-lg object-cover sm:hidden"
      />
    </>
  );
}
