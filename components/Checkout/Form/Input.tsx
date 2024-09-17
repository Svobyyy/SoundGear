import { PaymentLabel, PaymentSchema } from "@/lib/types/formTypes";
import { ReactNode } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegister,
} from "react-hook-form";

type Props = {
  labelName: string;
  placeholder: string;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  register: UseFormRegister<PaymentSchema>;
};
export default function Input({
  register,
  labelName,
  placeholder,
  error,
}: Props) {
  return (
    <div className="group">
      <label
        htmlFor={`${labelName.toLowerCase()}`}
        className={`mb-[9px] flex cursor-pointer justify-between ${error ? "text-red" : ""}`}
      >
        <span>{labelName}</span>
        {error !== undefined && (
          <span className="font-medium">{error.message as ReactNode}</span>
        )}
      </label>
      <input
        type="text"
        {...register(
          labelName.toLowerCase().replaceAll(" ", "-") as PaymentLabel,
        )}
        id={`${labelName.toLowerCase()}`}
        placeholder={placeholder}
        className={`w-full rounded-lg border border-gray py-[19px] pl-[18px] pt-[18px] font-bold text-black outline-none transition-all placeholder:font-bold focus:border-orange group-hover:border-orange ${error ? "border-red focus:border-red" : ""}`}
      />
    </div>
  );
}
