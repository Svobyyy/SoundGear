"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type CartContextProviderProps = {
  children: React.ReactNode;
};

type CartContext = {
  cart: { value: number };
  setCart: Dispatch<SetStateAction<{ value: number }>>;
};

export const CartContext = createContext<CartContext | null>(null);

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const [cart, setCart] = useState({ value: 5 });

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("UseCartContext");
  }

  return context;
};
