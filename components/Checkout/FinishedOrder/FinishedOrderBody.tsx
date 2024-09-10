import { Dispatch, SetStateAction } from "react";

import { setVisibility } from "@/lib/utils/utils";
import Button from "../../UI/ButtonOnClick";
import FinishedOrderText from "./FinishedOrderText";
import Order from "./Order";

type Props = {
  setOrderState: Dispatch<SetStateAction<boolean>>;
  orderState: boolean;
};

const orderSwitch = (setOrderState: Dispatch<SetStateAction<boolean>>) => {
  setOrderState((value) => !value);
};

export default function FinishedOrderBody({
  setOrderState,
  orderState,
}: Props) {
  return (
    <section
      className={`fixed left-1/2 top-1/2 z-50 w-full max-w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-[31px] text-black transition-all ${setVisibility(orderState)}`}
    >
      <FinishedOrderText />

      <Order />

      <Button
        text="BACK TO HOME"
        href=""
        onClickAction={() => orderSwitch(setOrderState)}
      />
    </section>
  );
}
