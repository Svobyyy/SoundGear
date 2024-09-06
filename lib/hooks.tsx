import { useCartContext } from "@/contexts/CartContextProvider";
import { useMemo } from "react";
import { SHIPPING_COST, VAT_RATE } from "./constants";

export const useTotalPrice = () => {
  const { cart } = useCartContext();

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }, [cart]);

  return totalPrice;
};

export const useTotalVat = () => {
  const totalPrice = useTotalPrice();
  const vatRate = VAT_RATE / 100;

  const totalVat = useMemo(() => {
    return totalPrice * vatRate;
  }, [totalPrice]);

  return Math.ceil(totalVat);
};

export const useTotalGrand = () => {
  const totalPrice = useTotalPrice();
  const totalVat = useTotalVat();

  const totalGrand = useMemo(() => {
    return totalPrice + totalVat + SHIPPING_COST;
  }, [totalPrice, totalVat]);

  return totalGrand;
};
