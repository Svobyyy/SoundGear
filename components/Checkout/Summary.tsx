import TotalCart from "./Summary/TotalCart";
import ProductsSummary from "./Summary/ProductsSummary";
import Pay from "./Summary/Pay";

export default function Summary() {
  return (
    <section
      className={`w-full rounded-lg bg-white p-[31px] text-black tab:max-w-[350px]`}
    >
      <h6>SUMMARY</h6>
      <ProductsSummary />
      <TotalCart />
      <Pay />
    </section>
  );
}
