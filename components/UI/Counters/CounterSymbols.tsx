import useCartHook from "@/lib/hooks/useCartHook";
import { SetStateAction } from "react";

type Props = {
  id: number;
  symbol: string;
  name?: string;
  price?: number;
  quantity?: number;
  increaseQuantityState?: (value: SetStateAction<number>) => void;
  decreaseQuantityState?: (value: SetStateAction<number>) => void;
};

export default function CounterSymbols({
  id,
  name,
  price,
  symbol,
  increaseQuantityState,
  decreaseQuantityState,
}: Props) {
  const { increaseQuantity, decreaseQuantity } = useCartHook();

  const isMainProduct =
    increaseQuantityState !== undefined || decreaseQuantityState !== undefined;

  return (
    <p
      className={`cursor-pointer select-none ${isMainProduct ? "w-[55px] py-[16.5px]" : "w-[43px] py-[8.5px]"} text-center leading-none opacity-50 transition-all hover:text-orange hover:opacity-100`}
      onClick={() => {
        isMainProduct
          ? symbol === "+" // increase or decrease Product's Quantity State for "ADD TO CART"
            ? increaseQuantityState !== undefined && increaseQuantityState(id)
            : decreaseQuantityState !== undefined && decreaseQuantityState(id)
          : name && price // increase Product's Quantity in Cart, otherwise decrease Product's Quantity in Cart
            ? increaseQuantity(id, price, name)
            : decreaseQuantity(id);
      }}
    >
      {symbol}
    </p>
  );
}
