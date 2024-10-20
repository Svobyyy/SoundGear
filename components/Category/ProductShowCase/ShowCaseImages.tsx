import { getProduct } from "@/lib/utils/products/productsUtils";
import Image from "next/image";
import React from "react";

type Props = {
  slug: string;
};

export default async function ShowCaseImages({ slug }: Props) {
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
        className="hidden rounded-lg lg:inline-block"
        src={desktop}
      />
      <Image
        width={1378}
        height={704}
        alt={`${name} image`}
        quality={100}
        className="hidden min-h-[400px] rounded-lg sm:inline-block lg:hidden object-cover"
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
    </>
  );
}
