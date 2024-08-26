type Props = {
  labelName: string;
  placeholder: string;
};
export default function Input({ labelName, placeholder }: Props) {
  return (
    <div>
      <label htmlFor={`${labelName.toLowerCase()}`} className="mb-[9px] block">
        {labelName}
      </label>
      <input
        type="text"
        id="fname"
        name="fname"
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray py-[19px] pl-[18px] pt-[18px] font-bold text-[#00000066] text-red-700 outline-none transition-all placeholder:font-bold focus:border-orange"
      />
    </div>
  );
}
