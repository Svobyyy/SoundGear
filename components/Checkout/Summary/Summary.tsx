import Button from "@/components/UI/Button";

import ProductsCart from "./ProductsCart";
import TotalCart from "./TotalCart";

export default function Summary() {
  return (
    <section
      className={`w-full rounded-lg bg-white p-[31px] text-black tab:max-w-[350px]`}
    >
      <h6>SUMMARY</h6>
      <ProductsCart quantity />
      <TotalCart />
      <Button text="checkout" navigateTo="checkout" />
    </section>
  );
}
