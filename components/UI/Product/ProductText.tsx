import { formatPrice } from "@/lib/utils/products/ProductUtilsClient";
import React from "react";

type Props = {
  name: string;
  price: number;
};

export default function ProductText({ name, price }: Props) {
  return (
    <div>
      <p className="font-bold">{name}</p>
      <p className="font-bold opacity-50">{formatPrice(price)}</p>
    </div>
  );
}
