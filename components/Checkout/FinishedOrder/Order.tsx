import OrderText from "./Order/OrderText";
import OrderProduct from "./Order/OrderProduct";
import OrderProducts from "./Order/OrderProducts";

export default function Order() {
  return (
    <section className="mb-[42px] mt-8 flex w-full justify-between rounded-lg bg-gray transition-all">
      <OrderProducts />
      <OrderText />
    </section>
  );
}
