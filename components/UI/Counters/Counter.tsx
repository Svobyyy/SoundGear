import { Dispatch, SetStateAction } from "react";
import { useCartContext } from "@/contexts/CartContextProvider";
import { increaseQuantity, decreaseQuantity } from "@/lib/utils/cart/cartUtils";
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
    <div className="flex max-h-12 items-center bg-gray">
      <CounterSymbols
        setCart={setCart}
        id={id}
        setQuantity={setQuantity}
        onClickFunction={decreaseQuantity}
        symbol="-"
        quantity={quantity}
      />

      <CounterQuantity quantity={quantity} cart={cart} id={id} />

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
