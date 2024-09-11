type Props = {
  labelName: string;
  placeholder: string;
  error?: boolean;
};
export default function Input({ labelName, placeholder, error }: Props) {
  error = true;
  return (
    <div>
      <label
        htmlFor={`${labelName.toLowerCase()}`}
        className={`mb-[9px] flex cursor-pointer justify-between ${error ? "text-red" : ""}`}
      >
        <span>{labelName}</span>
        {error && <span className="font-medium">Wrong Format</span>}
      </label>
      <input
        type="text"
        id={`${labelName.toLowerCase()}`}
        name={`${labelName.toLowerCase()}`}
        placeholder={placeholder}
        className={`w-full rounded-lg border border-gray py-[19px] pl-[18px] pt-[18px] font-bold text-black outline-none transition-all placeholder:font-bold focus:border-orange ${error ? "border-red focus:border-red" : ""}`}
      />
    </div>
  );
}
