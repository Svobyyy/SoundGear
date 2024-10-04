"use client";

import Counter from "@/components/UI/Counters/Counter";
import ButtonOnClick from "@/components/UI/ButtonOnClick";
import useCartHook from "@/lib/hooks/useCartHook";
import useQuantity from "@/lib/hooks/useQuantity";

export default function ProductCounter({ id, name, price }: CartCounterProps) {
  const { quantity, increaseQuantityState, decreaseQuantityState } =
    useQuantity();
  const { addToCart } = useCartHook();

  return (
    <div className="flex flex-wrap gap-4">
      <Counter
        id={id}
        name={name}
        price={price}
        quantity={quantity}
        increaseQuantityState={increaseQuantityState}
        decreaseQuantityState={decreaseQuantityState}
      />
      <ButtonOnClick
        text="ADD TO CART"
        width
        href="checkout"
        onClickAction={() =>
          quantity !== 0 && addToCart(id, price, name, quantity)
        }
      />
    </div>
  );
}
