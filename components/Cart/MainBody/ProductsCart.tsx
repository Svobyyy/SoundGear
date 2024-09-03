import Product from "@/components/UI/Product";
import { useCartContext } from "@/contexts/CartContextProvider";

export default function ProductsCart() {
  const { cart, setCart } = useCartContext();

  return (
    <ul className="flex flex-col gap-6 py-8">
      {cart.map(({ name, id, price, quantity }): any => {
        return (
          <Product
            key={name}
            name={name}
            id={id}
            price={price}
            quantity={quantity}
          />
        );
      })}
    </ul>
  );
}
