"use client";

import Counter from "../UI/Counter";
import ButtonOnClick from "../UI/ButtonOnClick";

export default function ProductCounter({ id, name, price }: CartCounterProps) {
  return (
    <div>
      <Counter id={id} name={name} price={price} />
      <ButtonOnClick
        text="ADD TO CART"
        onClickAction={() => console.log("added to cart")}
      />
    </div>
  );
}
