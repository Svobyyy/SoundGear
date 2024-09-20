import { setVisibility } from "@/lib/utils/utils";
import FinishedOrderText from "./FinishedOrderText";
import Order from "../Order";
import Button from "@/components/UI/Button";

type Props = {
  orderState: boolean;
};

export default function FinishedOrderBody({ orderState }: Props) {
  return (
    <section
      className={`absolute left-[20px] right-[20px] top-1/2 z-50 -translate-y-1/2 rounded-lg bg-white p-[32px] text-black transition-all sm:left-1/2 sm:w-full sm:max-w-[540px] sm:-translate-x-1/2 sm:p-12 ${setVisibility(orderState)}`}
    >
      <FinishedOrderText />

      <Order />

      <Button text="BACK TO HOME" navigateTo="/" />
    </section>
  );
}
