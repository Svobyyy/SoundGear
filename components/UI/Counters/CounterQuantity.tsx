import React from "react";

type Props = {
  quantity?: number;
  cart: CartItem[];
  id: number;
};

export default function CounterQuantity({ quantity, cart, id }: Props) {
  return (
    // The reason for adding this div is to maintain the same width regardless of number's width. (number 9 ===  9px, number 2 === 8px)
    <div className="flex w-[10px] items-center justify-center">
      <p className="select-none font-bold leading-none">
        {quantity !== undefined
          ? quantity
          : cart.map((item) => item.id === id && item.quantity)}
      </p>
    </div>
  );
}
