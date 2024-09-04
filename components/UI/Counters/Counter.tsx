"use client";

import { Dispatch, SetStateAction } from "react";
import { useCartContext } from "@/contexts/CartContextProvider";
import { increaseQuantity, decreaseQuantity } from "@/lib/utils/cart/cartUtils";
import CounterSymbols from "./CounterSymbols";

export default function Counter({
  id,
  price,
  name,
  quantity,
  setQuantity,
}: CartCounterProps & {
  quantity?: number;
  setQuantity?: Dispatch<SetStateAction<number>>;
}) {
  const { cart, setCart } = useCartContext();

  return (
    <div className="flex max-h-10 items-center bg-gray">
      <CounterSymbols
        setCart={setCart}
        id={id}
        setQuantity={setQuantity}
        onClickFunction={decreaseQuantity}
        symbol="-"
        quantity={quantity}
      />

      <p className="font-bold leading-none select-none">
        {quantity !== undefined
          ? quantity
          : cart.map((item) => item.id === id && item.quantity)}
      </p>

      <CounterSymbols
        setCart={setCart}
        id={id}
        setQuantity={setQuantity}
        onClickFunction={increaseQuantity}
        name={name}
        price={price}
        symbol="+"
        quantity={quantity}
      />
    </div>
  );
}
