"use client";

import Counter from "../UI/Counters/Counter";
import ButtonOnClick from "../UI/ButtonOnClick";
import { useState } from "react";

export default function ProductCounter({ id, name, price }: CartCounterProps) {
  
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
        onClickAction={() => console.log("added to cart")}
      />
    </div>
  );
}
