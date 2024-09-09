import React from "react";
import ProductText from "./ProductText";
import Image from "next/image";

type Props = {
  id: number;
  name: string;
  price: number;
  quantity?: number;
};

export default function ProductInfo({ id, name, quantity, price }: Props) {
  return (
    <div
      className={`flex flex-1 gap-4 ${!quantity ? "flex-col items-start mob:flex-row mob:items-center" : "items-center"}`}
    >
      <Image
        width={64}
        height={64}
        alt={`${name} cart`}
        quality={100}
        className="rounded-lg"
        src={`/cart/${id}.jpg`}
      />
      <ProductText name={name} price={price} />
    </div>
  );
}
