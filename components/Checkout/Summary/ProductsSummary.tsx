"use client";

import Product from "@/components/UI/Product";
import { useCartContext } from "@/contexts/CartContextProvider";

export default function ProductsSummary() {
  const { cart } = useCartContext();

  return (
    <ul className="flex flex-col gap-6 py-8">
      {cart.map(({ name, id, price, quantity }) => {
        return (
          <Product
            key={id}
            name={name}
            id={id}
            price={price}
            quantity={quantity}
          />
        );
      })}
    </ul>
  );
}
