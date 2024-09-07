import { MAX_NUMBER_OF_PRODUCTS, REMOVE_FROM_NAME } from "@/lib/constants";
import { Dispatch, SetStateAction } from "react";

// removes unnecessary words to make a cleaner name, for example YX1 Wireless Earphones -> YX1

const removeUnnecessaryName = (name: string) => {
  let words = name.split(" ");
  words = words.filter((word) => !REMOVE_FROM_NAME.includes(word));

  return words.join(" ");
};

const addToCart = (
  setCart: Dispatch<SetStateAction<CartItem[]>>,
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

const increaseQuantity = (
  setCart: Dispatch<SetStateAction<CartItem[]>>,
  id: number,
  price: number,
  name: string,
) => {
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

const decreaseQuantity = (
  setCart: Dispatch<SetStateAction<CartItem[]>>,
  id: number,
) => {
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

const removeAllFromCart = (setCart: Dispatch<SetStateAction<CartItem[]>>) => {
  setCart([]);
};

// Increasing or Decreasing state of Product's quantity to "ADD TO CART"

const increaseQuantityState = (
  setQuantity: Dispatch<SetStateAction<number>>,
) => {
  setQuantity((number) => Math.min(number + 1, MAX_NUMBER_OF_PRODUCTS));
};

const decreaseQuantityState = (
  setQuantity: Dispatch<SetStateAction<number>>,
) => {
  setQuantity((currentQuantity) => Math.max(currentQuantity - 1, 0));
};

export {
  increaseQuantityState,
  decreaseQuantityState,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeAllFromCart,
};
