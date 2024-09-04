import Product from "@/components/Product/MainProduct/Product";

type Props = {
  quantity?: boolean;
};

export default function ProductsCart({ quantity }: Props) {
  return (
    <ul className="flex flex-col gap-6 py-8">
      {/* <Product name={"XX99 MK II"}  />
      <Product name={"XX99 MK II"}  />
      <Product name={"XX99 MK II"}  /> */}
    </ul>
  );
}
