import { useCartContext } from "@/contexts/CartContextProvider";
import { useMemo } from "react";
import { SHIPPING_COST, VAT_RATE } from "./constants";

const vatRate = VAT_RATE / 100;

export const useTotalPrice = () => {
  const { cart } = useCartContext();

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => {
      return Math.ceil(total + item.price * item.quantity);
    }, 0);
  }, [cart]);

  const totalVat = useMemo(() => {
    return Math.ceil(totalPrice * vatRate);
  }, [totalPrice]);

  const totalGrand = useMemo(() => {
    return Math.ceil(totalPrice + totalVat + SHIPPING_COST);
  }, [totalVat, totalPrice]);

  return { totalPrice, totalVat, totalGrand };
};
