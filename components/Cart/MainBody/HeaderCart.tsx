import { useCartContext } from "@/contexts/CartContextProvider";
import { Dispatch, SetStateAction } from "react";

const RemoveAll = (setCart: Dispatch<SetStateAction<CartItem[]>>) => {
  setCart([]);
};

export default function HeaderCart() {
  const { cart, setCart } = useCartContext();
  return (
    <div className="flex justify-between">
      <h6>Cart()</h6>
      <p
        className="cursor-pointer underline opacity-50"
        onClick={() => RemoveAll(setCart)}
      >
        Remove all
      </p>
    </div>
  );
}
