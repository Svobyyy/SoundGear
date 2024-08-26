import Input from "./Input";

export default function FormSection() {
  return (
    <>
      <p className="subtitle mb-4 mt-[50px] text-orange">BILLING ADRESS</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Input placeholder="Alexei Ward" labelName="Name" />
        <Input placeholder="alexei@mail.com" labelName="Email Address" />
        <Input placeholder="+1 202-555-0136" labelName="Phone Number" />
      </div>
    </>
  );
}
