import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import Input from "./Input";
import { PaymentSchema } from "@/lib/types/formTypes";

type Props = {
  register: UseFormRegister<PaymentSchema>;
  errors: FieldErrors<FieldValues>;
};

export default function BillingAddress({ register, errors }: Props) {
  return (
    <>
      <p className="subtitle mb-4 mt-[50px] text-orange">BILLING ADRESS</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          placeholder="Alexei Ward"
          labelName="Name"
          register={register}
          error={errors.name}
        />
        <Input
          placeholder="alexei@mail.com"
          labelName="Email Address"
          register={register}
          error={errors["email-address"]}
        />
        <Input
          placeholder="+1 202-555-0136"
          labelName="Phone Number"
          error={errors["phone-number"]}
          register={register}
        />
      </div>
    </>
  );
}
