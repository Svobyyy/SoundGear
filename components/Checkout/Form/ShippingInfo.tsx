import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import Input from "./Input";
import { PaymentSchema } from "@/lib/types/types";

type Props = {
  register: UseFormRegister<PaymentSchema>;
  errors: FieldErrors<FieldValues>;
};

export default function ShippingInfo({ register, errors }: Props) {
  return (
    <>
      <p className="subtitle mb-4 mt-[50px] text-orange">shipping info</p>
      <Input
        placeholder="1137 Williams Avenue"
        labelName="Address"
        register={register}
        error={errors.address}
      />
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input
          placeholder="ZIP Code"
          labelName="ZIP Code"
          register={register}
          error={errors["zip-code"]}
        />
        <Input
          placeholder="City"
          labelName="City"
          register={register}
          error={errors.city}
        />
        <Input
          placeholder="Country"
          labelName="Country"
          register={register}
          error={errors.country}
        />
      </div>
    </>
  );
}
