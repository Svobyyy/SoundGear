import Cash from "@/components/icons/Cash";

export default function CashText() {
  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-8 text-center mob:flex-row mob:text-start">
      <Cash />
      <p className="flex-1 opacity-75">
        The ‘Cash on Delivery’ option enables you to pay in cash when our
        delivery courier arrives at your residence. Just make sure your address
        is correct so that your order will not be cancelled.
      </p>
    </div>
  );
}
