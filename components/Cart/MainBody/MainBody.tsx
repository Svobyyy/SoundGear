import Button from "../../UI/ButtonOnClick";

import { Dispatch, SetStateAction } from "react";
import ProductsCart from "./ProductsCart";
import HeaderCart from "./HeaderCart";
import TotalCart from "./TotalCart";

type props = {
  setCartState: Dispatch<SetStateAction<boolean>>;
  CartState: boolean;
};

const cartSwitch = (setCartState: Dispatch<SetStateAction<boolean>>) => {
  setCartState((value) => !value);
};

const showCart = (CartState: boolean) => {
  return CartState ? "z-50" : "-z-10 opacity-0";
};

export default function MainBody({ setCartState, CartState }: props) {
  return (
    <section
      className={`absolute right-0 top-[122px] z-20 w-full rounded-lg bg-white p-[31px] text-black transition-opacity sm:max-w-[377px] tab:top-[129px] ${showCart(CartState)}`}
    >
      <HeaderCart />

      <ProductsCart />

      <TotalCart />

      <Button text="checkout" onClickAction={() => cartSwitch(setCartState)} />
    </section>
  );
}
