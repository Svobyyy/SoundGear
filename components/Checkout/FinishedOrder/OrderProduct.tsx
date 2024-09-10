import { useCartContext } from "@/contexts/CartContextProvider";

export default function OrderProduct() {
  const { cart } = useCartContext();
  return cart.map(({ price, name, quantity }) => (
    <li className="w-full max-w-[198px] border-b-[1px] border-gray pb-3">
      <p className="font-bold">{name}</p>
      <p className="text-[14px] font-bold opacity-50">{price}</p>
      <p className="font-bold opacity-50">{quantity}</p>
    </li>
  ));
}
