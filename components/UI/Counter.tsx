"use client";

import { useCartContext } from "@/contexts/CartContextProvider";

export default function Counter() {
  const { cart, setCart } = useCartContext();
  return (
    <div className="flex max-h-10 items-center bg-gray">
      <p
        className="w-10 cursor-pointer select-none py-[7.5px] text-center leading-none opacity-50"
        onClick={() => {
          setCart((previous) => {
            return { value: previous.value-- };
          });
        }}
      >
        -
      </p>
      <p className="leading-none">{cart.value}</p>
      <p
        className="w-10 cursor-pointer select-none py-[7.5px] text-center leading-none opacity-50"
        onClick={() => {
          setCart((previous) => {
            return { value: previous.value++ };
          });
        }}
      >
        +
      </p>
    </div>
  );
}
