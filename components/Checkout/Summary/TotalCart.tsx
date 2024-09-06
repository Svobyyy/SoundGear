"use client";

import { useTotalGrand, useTotalPrice, useTotalVat } from "@/lib/hooks";
import TotalText from "../../UI/TotalText/TotalText";

import { SHIPPING_COST } from "@/lib/constants";

export default function TotalCart() {
  return (
    <>
      <TotalText name="TOTAL" price={useTotalPrice()} />
      <TotalText name="SHIPPING" price={SHIPPING_COST} />
      <TotalText name="VAT (INCLUDED)" price={useTotalVat()} space />
      <TotalText name="GRAND TOTAL" price={useTotalGrand()} orange space />
    </>
  );
}
