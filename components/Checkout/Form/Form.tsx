import { useForm, SubmitHandler } from "react-hook-form";
import Input from "./Input";
import FormSection from "./FormSection";

export default function Form() {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  return (
    <section
      className={`z-20 w-full rounded-lg bg-white p-[31px] text-black tab:max-w-[730px]`}
    >
      <h3>CHECKOUT</h3>
      <FormSection />
    </section>
  );
}
