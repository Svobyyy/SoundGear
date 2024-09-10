"use client";

import { useState } from "react";
import FinishedOrder from "../FinishedOrder/FinishedOrder";

export default function Pay() {
  const [orderState, setOrderState] = useState(true);

  return (
    <>
      <button
        className={`subtitle inline-block w-full cursor-pointer bg-orange py-[17.5px] text-center uppercase leading-none text-white transition-colors hover:bg-orangeLight`}
        onClick={() => setOrderState(true)}
      >
        CONTINUE & PAY
      </button>
      <FinishedOrder setOrderState={setOrderState} orderState={orderState} />
    </>
  );
}
