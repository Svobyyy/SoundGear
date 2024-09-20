import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import CashText from "./Form/CashText";

import ShippingInfo from "./Form/ShippingInfo";
import PaymentDetails from "./Form/PaymentDetails";
import BillingAddress from "./Form/BillingAdress";
import { PaymentSchema } from "@/lib/types/formTypes";

type Props = {
  watch: UseFormWatch<PaymentSchema>;
  reset: () => void;
  register: UseFormRegister<PaymentSchema>;
  errors: FieldErrors<PaymentSchema>;
};

export default function Form({ watch, register, errors }: Props) {
  const paymentMethod = watch("payment");

  return (
    <section
      className={`w-full rounded-lg bg-white p-[31px] text-black caret-[#D87D4A] tab:max-w-[730px]`}
    >
      <h3>CHECKOUT</h3>
      <BillingAddress register={register} errors={errors} />
      <ShippingInfo register={register} errors={errors} />
      <PaymentDetails register={register} errors={errors} />

      {paymentMethod === "cash-on-delivery" && <CashText />}
    </section>
  );
}
