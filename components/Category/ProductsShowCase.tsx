import React from "react";
import ProductShowCase from "./ProductShowCase";
import { getProductsByCategory } from "@/lib/utils/products/productsUtils";

type Props = {
  slugCategory: string;
};

export default async function ProductsShowCase({ slugCategory }: Props) {
  const products = await getProductsByCategory(slugCategory);

  return (
    <section className="max my-[64px] flex flex-col gap-[120px] sm:my-[120px] lg:my-40">
      {products.map(({ slug }, index) => {
        return (
          <ProductShowCase
            isFirst={index === 0 ? true : false}
            key={index}
            slug={slug}
            isOdd={index % 2 === 0 ? false : true}
          />
        );
      })}
    </section>
  );
}
