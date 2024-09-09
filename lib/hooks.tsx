import { useCartContext } from "@/contexts/CartContextProvider";
import { useMemo } from "react";
import { SHIPPING_COST, VAT_RATE } from "./constants";

const vatRate = VAT_RATE / 100;

export const useTotalPrice = () => {
  const { cart } = useCartContext();

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }, [cart]);

  const totalVat = useMemo(() => {
    return totalPrice * vatRate;
  }, [totalPrice]);

  const totalGrand = useMemo(() => {
    return totalPrice + totalVat + SHIPPING_COST;
  }, [totalVat, totalPrice]);

  return [Math.ceil(totalPrice), Math.ceil(totalVat), Math.ceil(totalGrand)];
};
