import Button from "@/components/UI/Button";

import TotalCart from "./TotalCart";
import ProductsSummary from "./ProductsSummary";

export default function Summary() {
  return (
    <section
      className={`w-full rounded-lg bg-white p-[31px] text-black tab:max-w-[350px]`}
    >
      <h6>SUMMARY</h6>
      <ProductsSummary />
      <TotalCart />
      <Button text="checkout" navigateTo="checkout" />
    </section>
  );
}
