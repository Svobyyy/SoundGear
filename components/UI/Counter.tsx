"use client";

import { useCartContext } from "@/contexts/CartContextProvider";
import { addToQuantity, decreaseQuantity } from "@/lib/utils/cart/cartUtils";
import { Dispatch, SetStateAction } from "react";

export default function Counter({ id, price, name }: CartCounterProps) {
  const { cart, setCart } = useCartContext();
  return <>{counter(setCart, cart, id, name, price)}</>;
}

const counter = (
  setCart: Dispatch<SetStateAction<CartItem[]>>,
  cart: CartItem[],
  id: number,
  name: string,
  price: number,
) => {
  return (
    <div className="flex max-h-10 items-center bg-gray">
      <p
        className="w-10 cursor-pointer select-none py-[7.5px] text-center leading-none opacity-50"
        onClick={() => decreaseQuantity(setCart, id)}
      >
        -
      </p>
      <p className="font-bold leading-none">
        {cart.map((item) => item.id === id && item.quantity)}
      </p>
      <p
        className="w-10 cursor-pointer select-none py-[7.5px] text-center leading-none opacity-50"
        onClick={() => addToQuantity(setCart, price, name, id)}
      >
        +
      </p>
    </div>
  );
};
