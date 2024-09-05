import { useCartContext } from "@/contexts/CartContextProvider";
import { removeAllFromCart } from "@/lib/utils/cart/cartUtils";

export default function HeaderCart() {
  const { cart, setCart } = useCartContext();
  return (
    <div className="flex justify-between">
      <h6>Cart({cart.length})</h6>
      <p
        className="cursor-pointer underline opacity-50 transition-all hover:text-orange hover:opacity-100"
        onClick={() => removeAllFromCart(setCart)}
      >
        Remove all
      </p>
    </div>
  );
}
