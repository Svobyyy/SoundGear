import Button from "../../UI/ButtonOnClick";

import { Dispatch, SetStateAction } from "react";
import ProductsCart from "./ProductsCart";
import HeaderCart from "./HeaderCart";
import { useTotalPrice } from "@/lib/hooks";
import TotalText from "@/components/UI/TotalText/TotalText";
import { setVisibility } from "@/lib/utils/utils";

type Props = {
  setCartState: Dispatch<SetStateAction<boolean>>;
  cartState: boolean;
};

const cartSwitch = (setCartState: Dispatch<SetStateAction<boolean>>) => {
  setCartState((value) => !value);
};

export default function MainBody({ setCartState, cartState }: Props) {
  const [totalPrice] = useTotalPrice();

  return (
    <section
      className={`absolute left-[20px] right-[20px] top-[122px] z-50 rounded-lg bg-white p-[31px] text-black transition-all sm:left-auto sm:right-0 sm:w-full sm:max-w-[377px] tab:top-[129px] ${setVisibility(cartState)}`}
    >
      <HeaderCart />

      <ProductsCart />

      <TotalText name="TOTAL" price={totalPrice} space />

      <Button text="checkout" onClickAction={() => cartSwitch(setCartState)} />
    </section>
  );
}
