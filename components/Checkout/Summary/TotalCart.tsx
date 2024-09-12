"use client";

import { useTotalPrice } from "@/lib/hooks/useTotalPrice";
import TotalText from "../../UI/TotalText/TotalText";
import { SHIPPING_COST } from "@/lib/constants";

export default function TotalCart() {
  const { totalPrice, totalVat, totalGrand } = useTotalPrice();

  return (
    <>
      <TotalText name="TOTAL" price={totalPrice} />
      <TotalText name="SHIPPING" price={SHIPPING_COST} />
      <TotalText name="VAT (INCLUDED)" price={totalVat} space />
      <TotalText name="GRAND TOTAL" price={totalGrand} orange space />
    </>
  );
}
