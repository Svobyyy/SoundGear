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

  const vatRate = VAT_RATE / 100;

  const totalVat = useMemo(() => {
    return totalPrice * vatRate;
  }, [totalPrice, vatRate]);

  const totalGrand = useMemo(() => {
    return totalPrice + totalVat + SHIPPING_COST;
  }, [totalPrice, totalVat]);

  return [Math.ceil(totalPrice), Math.ceil(totalVat), Math.ceil(totalGrand)];
};

// export const useTotalVat = () => {
//   const totalPrice = useTotalPrice();
//

//   const totalVat = useMemo(() => {
//     return totalPrice * vatRate;
//   }, [totalPrice, vatRate]);

//   return Math.ceil(totalVat);
// };

// export const useTotalGrand = () => {
//   const totalPrice = useTotalPrice();
//   const totalVat = useTotalVat();

//   return totalGrand;
// };

// export const useLoadLocalStorageCart = () => {

//   useEffect(() => {
//     const localCart = localStorage.getItem("cart");
//     const parsedCart = localCart ? JSON.parse(localCart) : [];

//     return setCart(parsedCart);
//   }, []);
// };

// export const useAddLocalStorageCart = () => {
//   const { cart } = useCartContext();

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);
// };

// export const removeAllLocalStorageCart = () => {
//   useEffect(() => {
//     localStorage.removeItem("cart");
//   }, []);
// };
