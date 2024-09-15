import { useState } from "react";
import { MAX_NUMBER_OF_PRODUCTS } from "../constants";

export default function useQuantity() {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantityState = () => {
    setQuantity((number) => Math.min(number + 1, MAX_NUMBER_OF_PRODUCTS));
  };

  const decreaseQuantityState = () => {
    setQuantity((currentQuantity) => Math.max(currentQuantity - 1, 0));
  };

  return { quantity, increaseQuantityState, decreaseQuantityState };
}
