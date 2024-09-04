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
  console.log(symbol, quantity);

  return (
    <p
      className="w-10 cursor-pointer select-none py-[7.5px] text-center leading-none opacity-50 transition-all hover:text-orange hover:opacity-100"
      onClick={() => {
        setQuantity
          ? symbol === "+"
            ? quantity !== undefined && increaseQuantityState(setQuantity, quantity)
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
