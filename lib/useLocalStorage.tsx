"use client";

import { useCartContext } from "@/contexts/CartContextProvider";
import { useEffect, useState } from "react";

export const useLocalStorage = () => {
  const { cart, setCart } = useCartContext();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const localCart = localStorage.getItem("cart");
      const parsedCart: CartItem[] = localCart ? JSON.parse(localCart) : [];
      setCart(parsedCart);
    } catch (error) {
      console.error(error);
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (loaded) {
      try {
        localStorage.setItem("cart", JSON.stringify(cart));
      } catch (error) {
        console.error(error);
      }
    }
  }, [cart, loaded]);
};
