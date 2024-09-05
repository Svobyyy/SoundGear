import {
  increaseQuantityState,
  decreaseQuantityState,
} from "@/lib/utils/cart/cartUtils";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setCart: Dispatch<SetStateAction<CartItem[]>>;
  id: number;
  onClickFunction: any;
  name?: string;
  price?: number;
  symbol: string;
  setQuantity?: Dispatch<SetStateAction<number>>;
  quantity?: number;
};

export default function CounterSymbols({
  setCart,
  id,
  onClickFunction,
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
          ? symbol === "+"
            ? quantity !== undefined && increaseQuantityState(setQuantity)
            : setQuantity && decreaseQuantityState(setQuantity)
          : name && price
            ? onClickFunction(setCart, id, price, name)
            : onClickFunction(setCart, id);
      }}
    >
      {symbol}
    </p>
  );
}
