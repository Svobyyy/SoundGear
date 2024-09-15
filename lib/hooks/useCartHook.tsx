import { MAX_NUMBER_OF_PRODUCTS } from "../constants";
import { useCartContext } from "@/contexts/CartContextProvider";
import { removeUnnecessaryName } from "../utils/utils";

export default function useCartHook() {
  const { setCart } = useCartContext();

  const addToCart = (
    id: number,
    price: number,
    name: string,
    quantity: number,
  ) => {
    setCart((prevCart) => {
      const prodExists = prevCart.some((product) => product.id === id);

      if (prodExists) {
        return prevCart.map((product) => {
          if (product.id === id) {
            const newQuantity = Math.min(
              product.quantity + quantity,
              MAX_NUMBER_OF_PRODUCTS,
            );
            return { ...product, quantity: newQuantity };
          }
          return product;
        });
      } else {
        const cleanName = removeUnnecessaryName(name);
        const addedQuantity = Math.min(quantity, MAX_NUMBER_OF_PRODUCTS);
        return [
          ...prevCart,
          { id, name: cleanName, price, quantity: addedQuantity },
        ];
      }
    });
  };

  const increaseQuantity = (id: number, price: number, name: string) => {
    setCart((prevCart) => {
      const prodExists = prevCart.some((product) => product.id === id);

      if (prodExists) {
        return prevCart.map((product) =>
          product.id === id && product.quantity < MAX_NUMBER_OF_PRODUCTS
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        );
      } else {
        const cleanName = removeUnnecessaryName(name);
        return [...prevCart, { id, name: cleanName, price, quantity: 1 }];
      }
    });
  };

  const decreaseQuantity = (id: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product,
        )
        .filter((item) => item.quantity > 0);

      return updatedCart;
    });
  };

  const removeAllFromCart = () => {
    setCart([]);
  };

  return { addToCart, increaseQuantity, decreaseQuantity, removeAllFromCart };
}
