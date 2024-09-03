import { Dispatch, SetStateAction } from "react";

const addToQuantity = (
  setCart: Dispatch<SetStateAction<CartItem[]>>,
  price: number,
  name: string,
  id: number,
) => {
  setCart((prevCart) => {
    const itemExists = prevCart.some((item) => item.id === id);

    if (itemExists) {
      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      );
    } else {
      return [...prevCart, { id, name, price, quantity: 1 }];
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

export { addToQuantity, decreaseQuantity, removeAllFromCart };
