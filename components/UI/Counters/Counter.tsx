import { useCartContext } from "@/contexts/CartContextProvider";
import CounterSymbols from "./CounterSymbols";
import CounterQuantity from "./CounterQuantity";
import { SetStateAction } from "react";

export default function Counter({
  id,
  price,
  name,
  quantity,
  increaseQuantityState,
  decreaseQuantityState,
}: CartCounterProps & {
  quantity?: number;
  increaseQuantityState: (value: SetStateAction<number>) => void;
  decreaseQuantityState: (value: SetStateAction<number>) => void;
}) {
  const { cart } = useCartContext();

  return (
    <div className="flex max-h-12 max-w-[120px] items-center bg-gray">
      <CounterSymbols
        id={id}
        symbol="-"
        price={price}
        quantity={quantity}
        decreaseQuantityState={decreaseQuantityState}
      />

      <CounterQuantity quantity={quantity} cart={cart} id={id} />

      <CounterSymbols
        id={id}
        name={name}
        price={price}
        symbol="+"
        quantity={quantity}
        increaseQuantityState={increaseQuantityState}
      />
    </div>
  );
}
