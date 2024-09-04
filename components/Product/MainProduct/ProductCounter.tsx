"use client";

import Counter from "../../UI/Counters/Counter";
import ButtonOnClick from "../../UI/ButtonOnClick";
import { useState } from "react";
import { addToCart } from "@/lib/utils/cart/cartUtils";
import { useCartContext } from "@/contexts/CartContextProvider";

export default function ProductCounter({ id, name, price }: CartCounterProps) {
  const { setCart } = useCartContext();
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="flex gap-4">
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
        onClickAction={() => addToCart(setCart, id, price, name, quantity)}
      />
    </div>
  );
}
