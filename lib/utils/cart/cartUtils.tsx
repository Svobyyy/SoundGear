import { MAX_NUMBER_OF_PRODUCTS, REMOVE_FROM_NAME } from "@/lib/constants";
import { Dispatch, SetStateAction } from "react";

// removes unnecessary words to make a cleaner name, for example YX1 Wireless Earphones -> YX1

const removeUnnecessaryName = (name: string) => {
  let words = name.split(" ");
  words = words.filter((word) => !REMOVE_FROM_NAME.includes(word));

  return words.join(" ");
};

const increaseQuantity = (
  setCart: Dispatch<SetStateAction<CartItem[]>>,
  id: number,
  price: number,
  name: string,
) => {
  setCart((prevCart) => {
    const itemExists = prevCart.some((item) => item.id === id);

    if (itemExists) {
      return prevCart.map((item) =>
        item.id === id && item.quantity < MAX_NUMBER_OF_PRODUCTS
          ? { ...item, quantity: item.quantity + 1 }
          : item,
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
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      )
      .filter((item) => item.quantity > 0);

    return updatedCart;
  });
};

const removeAllFromCart = (setCart: Dispatch<SetStateAction<CartItem[]>>) => {
  setCart([]);
};

// adding or decreasing state of Product's quantity to "ADD TO CART"

const increaseQuantityState = (
  setQuantity: Dispatch<SetStateAction<number>>,
  quantity: number,
) => {
  quantity < MAX_NUMBER_OF_PRODUCTS
    ? setQuantity((number) => number + 1)
    : setQuantity(() => MAX_NUMBER_OF_PRODUCTS);
};

const decreaseQuantityState = (
  setQuantity: Dispatch<SetStateAction<number>>,
) => {
  setQuantity((number) => (number - 1 >= 0 ? number - 1 : number));
};

export {
  increaseQuantityState,
  decreaseQuantityState,
  increaseQuantity,
  decreaseQuantity,
  removeAllFromCart,
};
