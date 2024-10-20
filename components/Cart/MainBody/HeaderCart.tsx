import { useCartContext } from "@/contexts/CartContextProvider";
import useCartHook from "@/lib/hooks/useCartHook";

export default function HeaderCart() {
  const { cart } = useCartContext();
  const { removeAllFromCart } = useCartHook();

  return (
    <div className="flex justify-between">
      <h6>Cart({cart.length})</h6>
      <p
        className="cursor-pointer underline opacity-75 transition-all hover:text-orange hover:opacity-100"
        onClick={() => removeAllFromCart()}
      >
        Remove all
      </p>
    </div>
  );
}
