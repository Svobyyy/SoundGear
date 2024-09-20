import TotalCart from "./Summary/TotalCart";
import ProductsSummary from "./Summary/ProductsSummary";
import Pay from "./Summary/Pay";

type Props = {
  isSubmitting: boolean;
};

export default function Summary({ isSubmitting }: Props) {
  return (
    <section
      className={`w-full rounded-lg bg-white p-[31px] text-black tab:max-w-[350px]`}
    >
      <h6>SUMMARY</h6>
      <ProductsSummary />
      <TotalCart />
      <Pay isSubmitting={isSubmitting} />
    </section>
  );
}
