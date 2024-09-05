import { useMemo } from "react";
import { useCartContext } from "@/contexts/CartContextProvider";

export default function TotalCart() {
  const { cart } = useCartContext();

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }, [cart]);

  return (
    <div className="mb-6 flex justify-between">
      <p className="opacity-50">TOTAL</p>
      <h6>${totalPrice}</h6>
    </div>
  );
}
