import { useTotalPrice } from "@/lib/hooks/useTotalPrice";
import { formatPrice } from "@/lib/utils/products/ProductUtilsClient";

export default function OrderText() {
  const { totalGrand } = useTotalPrice();
  return (
    <div className="w-full max-w-none rounded-b-lg bg-black py-[20px] pl-[24px] text-white sm:max-w-[198px] sm:rounded-r-lg sm:rounded-bl-none sm:py-[42px] sm:pl-[32px]">
      <p className="mb-2 opacity-50">GRAND TOTAL</p>
      <h6>{formatPrice(totalGrand)}</h6>
    </div>
  );
}
