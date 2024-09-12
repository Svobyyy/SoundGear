import Product from "@/components/UI/Product";
import { useCartContext } from "@/contexts/CartContextProvider";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";

export default function ProductsCart() {
  const { cart } = useCartContext();

  useLocalStorage();

  return (
    <ul className="flex flex-col gap-6 py-8">
      {cart.map(({ name, id, price }) => {
        return <Product key={id} name={name} id={id} price={price} />;
      })}
    </ul>
  );
}
