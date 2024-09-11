"use client";

import { useState } from "react";
import FinishedOrder from "../FinishedOrder/FinishedOrder";
import { useCartContext } from "@/contexts/CartContextProvider";

export default function Pay() {
  const [orderState, setOrderState] = useState(false);
  const { cart } = useCartContext();

  return (
    <>
      <button
        className={`subtitle inline-block w-full cursor-pointer bg-orange py-[17.5px] text-center uppercase leading-none text-white transition-colors hover:bg-orangeLight`}
        disabled={cart.length === 0}
        onClick={() => setOrderState(true)}
      >
        CONTINUE & PAY
      </button>
      <FinishedOrder setOrderState={setOrderState} orderState={orderState} />
    </>
  );
}
