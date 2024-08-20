import Product from "@/components/UI/Product";

export default function ProductsCart() {
  return (
    <ul className="flex flex-col gap-6 py-8">
      <Product name={"XX99 MK II"} count={2} />
      <Product name={"XX99 MK II"} count={10} />
      <Product name={"XX99 MK II"} count={10} />
    </ul>
  );
}
