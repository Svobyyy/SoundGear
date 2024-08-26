import { Dispatch, SetStateAction } from "react";

const addToQuantity = (
  cart: CartItem[],
  setCart: Dispatch<SetStateAction<CartItem[]>>,
  id: number,
  amount: number,
) => {
  setCart((prevCart) => {
    const updatedCart = prevCart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + amount } : item,
    );
    return updatedCart;
  });
};

const decreaseQuantity = (
  cart: CartItem[],
  setCart: Dispatch<SetStateAction<CartItem[]>>,
  id: number,
  amount: number,
) => {
  setCart((prevCart) => {
    const updatedCart = prevCart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(0, item.quantity - amount) }
        : item,
    );
    return updatedCart;
  });
};

const removeAllFromCart = (setCart: Dispatch<SetStateAction<CartItem[]>>) => {
  setCart([]);
};

export { addToQuantity, decreaseQuantity, removeAllFromCart };
