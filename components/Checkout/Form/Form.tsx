import { useForm, SubmitHandler } from "react-hook-form";
import Input from "./Input";
import Payment from "./PaymentInput";
import CashText from "./CashText";

export default function Form() {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  return (
    <form
      className={`w-full rounded-lg bg-white p-[31px] text-black tab:max-w-[730px]`}
    >
      <h3>CHECKOUT</h3>
      <p className="subtitle mb-4 mt-[50px] text-orange">BILLING ADRESS</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input placeholder="Alexei Ward" labelName="Name" />
        <Input placeholder="alexei@mail.com" labelName="Email Address" />
        <Input placeholder="+1 202-555-0136" labelName="Phone Number" />
      </div>
      <p className="subtitle mb-4 mt-[50px] text-orange">shipping info</p>
      <Input placeholder="Alexei Ward" labelName="Name" />
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input placeholder="Alexei Ward" labelName="Name" />
        <Input placeholder="alexei@mail.com" labelName="Email Address" />
        <Input placeholder="+1 202-555-0136" labelName="Phone Number" />
      </div>
      <p className="subtitle mb-4 mt-[50px] text-orange">Payment details</p>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Payment labelName="e-Money" />
        <Payment labelName="Cash on Delivery" />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input placeholder="alexei@mail.com" labelName="Email Address" />
        <Input placeholder="+1 202-555-0136" labelName="Phone Number" />
      </div>
      <CashText />
    </form>
  );
}
