import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import PaymentInput from "./PaymentInput";
import { PaymentSchema } from "@/lib/types/types";

type Props = {
  register: UseFormRegister<PaymentSchema>;
  errors: FieldErrors<FieldValues>;
};

export default function PaymentDetails({ register, errors }: Props) {
  return (
    <>
      <p className="subtitle mb-4 mt-[50px] text-orange">Payment details</p>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <PaymentInput
          labelName="e-Money"
          register={register}
          error={errors.payment}
        />
        <PaymentInput
          labelName="Cash on Delivery"
          register={register}
          error={errors.payment}
        />
      </div>
    </>
  );
}
