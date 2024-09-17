"use client";

import { FieldValues, useForm } from "react-hook-form";
import CashText from "./Form/CashText";
import { zodResolver } from "@hookform/resolvers/zod";
import ShippingInfo from "./Form/ShippingInfo";
import PaymentDetails from "./Form/PaymentDetails";
import BillingAddress from "./Form/BillingAdress";
import { paymentSchema, PaymentSchema } from "@/lib/types/formTypes";
import { useCartContext } from "@/contexts/CartContextProvider";
import { StripePayment } from "@/lib/ServerActions";

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

  const { cart } = useCartContext();

  const paymentMethod = watch("payment");

  const onSubmit = async (data: FieldValues) => {
    const result = paymentSchema.safeParse(data);

    if (!result.success) {
      alert(result.error);
      return reset();
    }

    StripePayment(cart, data["email-address"]);

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)} // Issue: onSubmit should be a function, but it's a function call
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
