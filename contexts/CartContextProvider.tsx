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
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
};

export const CartContext = createContext<CartContext | null>(null);

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

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
