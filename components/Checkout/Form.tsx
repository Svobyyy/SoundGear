"use client";

import { FieldValues, useForm } from "react-hook-form";
import CashText from "./Form/CashText";
import { zodResolver } from "@hookform/resolvers/zod";
import ShippingInfo from "./Form/ShippingInfo";
import PaymentDetails from "./Form/PaymentDetails";
import { PaymentSchema, paymentSchema } from "@/lib/types/types";
import BillingAddress from "./Form/BillingAdress";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<PaymentSchema>({
    resolver: zodResolver(paymentSchema),
  });

  const paymentMethod = watch("payment");

  const onSubmit = async (data: FieldValues) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`w-full rounded-lg bg-white p-[31px] text-black caret-[#D87D4A] tab:max-w-[730px]`}
    >
      <h3>CHECKOUT</h3>
      <BillingAddress register={register} errors={errors} />
      <ShippingInfo register={register} errors={errors} />
      <PaymentDetails register={register} errors={errors} />

      {paymentMethod === "cash-on-delivery" && <CashText />}
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
}
