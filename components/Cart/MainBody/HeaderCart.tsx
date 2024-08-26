import { useCartContext } from "@/contexts/CartContextProvider";

export default function HeaderCart() {
  const { cart, setCart } = useCartContext();
  return (
    <div className="flex justify-between">
      <h6>Cart()</h6>
      <p className="cursor-pointer underline opacity-50">Remove all</p>
    </div>
  );
}
