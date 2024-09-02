type Props = {
  labelName: string;
};
export default function PaymentInput({ labelName }: Props) {
  return (
    <label
      htmlFor={`${labelName.toLowerCase()}`}
      className="group relative mt-[18px] flex w-full cursor-pointer select-none items-center gap-4 rounded-lg border border-gray py-[19px] pl-[18px] text-[14px] font-bold text-black outline-none transition-all hover:border-orange focus:border-orange has-[:checked]:border-orange"
    >
      <input
        type="radio"
        id={labelName.toLowerCase()}
        name="payment"
        className="peer absolute hidden opacity-0"
      />
      <span className="relative h-[20px] w-[20px] rounded-full border border-gray transition-all after:absolute after:left-1/2 after:top-1/2 after:inline-block after:h-[10px] after:w-[10px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-orange after:opacity-0 after:transition-all peer-has-[:unchecked]:group-hover:after:bg-orangeLight group-hover:after:opacity-100 peer-checked:after:opacity-100" />
      {labelName}
    </label>
  );
}
