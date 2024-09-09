"use client";

import { useState } from "react";
import { addToCart } from "@/lib/utils/cart/cartUtils";
import { useCartContext } from "@/contexts/CartContextProvider";
import Counter from "@/components/UI/Counters/Counter";
import ButtonOnClick from "@/components/UI/ButtonOnClick";

export default function ProductCounter({ id, name, price }: CartCounterProps) {
  const { setCart } = useCartContext();
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="flex flex-wrap gap-4">
      <Counter
        id={id}
        name={name}
        price={price}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <ButtonOnClick
        text="ADD TO CART"
        width
        onClickAction={() =>
          quantity !== 0 && addToCart(setCart, id, price, name, quantity)
        }
      />
    </div>
  );
}
