import { Dispatch, SetStateAction } from "react";
import { useCartContext } from "@/contexts/CartContextProvider";
import CounterSymbols from "./CounterSymbols";
import CounterQuantity from "./CounterQuantity";

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
    <div className="flex max-h-12 max-w-[120px] items-center bg-gray">
      <CounterSymbols
        setCart={setCart}
        id={id}
        setQuantity={setQuantity}
        symbol="-"
        quantity={quantity}
      />

      <CounterQuantity quantity={quantity} cart={cart} id={id} />

      <CounterSymbols
        setCart={setCart}
        id={id}
        setQuantity={setQuantity}
        name={name}
        price={price}
        symbol="+"
        quantity={quantity}
      />
    </div>
  );
}
