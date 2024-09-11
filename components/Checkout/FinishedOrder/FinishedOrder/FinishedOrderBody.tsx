import { Dispatch, SetStateAction } from "react";

import { setVisibility } from "@/lib/utils/utils";
import Button from "../../../UI/ButtonOnClick";
import FinishedOrderText from "./FinishedOrderText";
import Order from "../Order";

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
      className={`absolute sm:left-1/2 left-[20px] right-[20px] top-1/2 z-50 sm:w-full sm:max-w-[540px] sm:-translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-[32px] text-black transition-all sm:p-12 ${setVisibility(orderState)}`}
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
