import Confirmation from "@/components/icons/Confirmation";

export default function FinishedOrderText() {
  return (
    <>
      <Confirmation />
      <h3 className="mb-6 mt-[32px]">
        THANK YOU
        <br />
        FOR YOUR ORDER
      </h3>
      <p className="opacity-50">
        You will receive an email confirmation shortly.
      </p>
    </>
  );
}
