"use client";

import { PaymentSchema, paymentSchema } from "@/lib/types/formTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Form from "./Form";
import Summary from "./Summary";
import { StripePayment } from "@/lib/StripePayment";
import { useCartContext } from "@/contexts/CartContextProvider";
import FinishedOrder from "./FinishedOrder/FinishedOrder";
import { Suspense } from "react";

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

  const onSubmit = async (data: PaymentSchema) => {
    const formData = paymentSchema.safeParse(data);

    if (!formData.success) {
      alert(formData.error);
      return reset();
    }

    try {
      await StripePayment(cart, formData.data);
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

      <Suspense>
        <FinishedOrder />
      </Suspense>
    </>
  );
}
