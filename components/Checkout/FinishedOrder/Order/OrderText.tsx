import { useTotalPrice } from "@/lib/useTotalPrice";
import { formatPrice } from "@/lib/utils/products/ProductUtilsClient";

export default function OrderText() {
  const { totalGrand } = useTotalPrice();
  return (
    <div className="w-full max-w-[198px] gap-2 rounded-r-lg bg-black py-[42px] pl-[32px] text-white ">
      <p className="opacity-50">GRAND TOTAL</p>
      <h6>{formatPrice(totalGrand)}</h6>
    </div>
  );
}
