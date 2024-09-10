import { useTotalPrice } from "@/lib/useTotalPrice";
import OrderProduct from "./OrderProduct";

export default function Order() {
  const { totalGrand } = useTotalPrice();

  return (
    <section className="mb-[42px] mt-8 flex w-full bg-red-50">
      <ul>
        <OrderProduct />
      </ul>
      <div className="gap-2 bg-black py-[42px] pl-[32px] text-white">
        <p className="opacity-50">GRAND TOTAL</p>
        <h6>{totalGrand}</h6>
      </div>
    </section>
  );
}
