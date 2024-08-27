import TotalText from "./TotalText";

export default function TotalCart() {
  return (
    <>
      <TotalText name="TOTAL" value="5,396" />
      <TotalText name="SHIPPING" value="50" />
      <TotalText name="VAT (INCLUDED)" value="50" />
      <TotalText name="GRAND TOTAL" value="50" orange />
    </>
  );
}
