import {
  increaseQuantityState,
  decreaseQuantityState,
} from "@/lib/utils/cart/cartUtils";
import { Dispatch, SetStateAction } from "react";
import { increaseQuantity, decreaseQuantity } from "@/lib/utils/cart/cartUtils";

type Props = {
  setCart: Dispatch<SetStateAction<CartItem[]>>;
  id: number;
  name?: string;
  price?: number;
  symbol: string;
  setQuantity?: Dispatch<SetStateAction<number>>;
  quantity?: number;
};

export default function CounterSymbols({
  setCart,
  id,
  name,
  price,
  symbol,
  quantity,
  setQuantity,
}: Props) {
  return (
    <p
      className={`cursor-pointer select-none ${setQuantity ? "w-[55px] py-[16.5px]" : "w-[43px] py-[8.5px]"} text-center leading-none opacity-50 transition-all hover:text-orange hover:opacity-100`}
      onClick={() => {
        setQuantity
          ? symbol === "+" // If symbol is "+", increase "Add To Cart" State Quantity, otherwise decrease "Add To Cart" State Quantity
            ? quantity !== undefined && increaseQuantityState(setQuantity)
            : setQuantity && decreaseQuantityState(setQuantity)
          : name && price // If name and price exist, increase Product's Quantity in Cart, otherwise decrease Product's Quantity in Cart
            ? increaseQuantity(setCart, id, price, name)
            : decreaseQuantity(setCart, id);
      }}
    >
      {symbol}
    </p>
  );
}
