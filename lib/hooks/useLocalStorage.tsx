"use client";

import { useCartContext } from "@/contexts/CartContextProvider";
import { useEffect, useState } from "react";
import { z } from "zod";

const cartSchema = z.array(
  z
    .object({
      id: z.number(),
      name: z.string(),
      price: z.number().int().positive().min(100),
      quantity: z.number().int().positive().gt(0).lt(10),
    })
    .strict(),
);

export const useLocalStorage = () => {
  const { cart, setCart } = useCartContext();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const localCart = localStorage.getItem("cart");
      const cart: unknown = localCart ? JSON.parse(localCart) : [];

      const validateCart = cartSchema.safeParse(cart);

      console.log(validateCart);

      if (!validateCart.success) return localStorage.removeItem("cart");

      setCart(validateCart.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoaded(true);
    }
  }, [setCart]);

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
