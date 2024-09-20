"use client";

import { PaymentSchema, paymentSchema } from "@/lib/types/formTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import Form from "./Form";
import Summary from "./Summary";
import { StripePayment } from "@/lib/ServerActions";
import { useCartContext } from "@/contexts/CartContextProvider";
import FinishedOrder from "./FinishedOrder/FinishedOrder";

export default function Checkout() {
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
  const onSubmit = async (data: FieldValues) => {
    const result = paymentSchema.safeParse(data);

    if (!result.success) {
      alert(result.error);
      return reset();
    }

    try {
      await StripePayment(cart, data["email-address"]);
    } catch (error: Error | unknown) {
      alert((error as Error).message);
    }

    reset();
  };

  return (
    <>
      <form
        className="flex flex-col justify-center gap-[30px] tab:flex-row"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form watch={watch} reset={reset} register={register} errors={errors} />
        <Summary isSubmitting={isSubmitting} />
      </form>

      <FinishedOrder />
    </>
  );
}
