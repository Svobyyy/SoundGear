"use client";

import { Dispatch, SetStateAction, useState } from "react";
import CartIcon from "../icons/Cart";
import MainBody from "./MainBody/MainBody";
import BackgroundOverlay from "../UI/BackgroundOverlay";

const cartSwitch = (setCartState: Dispatch<SetStateAction<boolean>>) => {
  setCartState((value) => !value);
};

export default function Cart() {
  const [cartState, setCartState] = useState(false);
  return (
    <>
      <CartIcon onClick={() => cartSwitch(setCartState)} />

      <MainBody setCartState={setCartState} cartState={cartState} />

      <BackgroundOverlay showSwitch={cartState} />
    </>
  );
}
