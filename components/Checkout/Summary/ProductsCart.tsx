import Product from "@/components/UI/Product";

type Props = {
  quantity?: boolean;
};

export default function ProductsCart({ quantity }: Props) {
  return (
    <ul className="flex flex-col gap-6 py-8">
      <Product name={"XX99 MK II"} count={2} quantity={quantity} />
      <Product name={"XX99 MK II"} count={10} quantity={quantity} />
      <Product name={"XX99 MK II"} count={10} quantity={quantity} />
    </ul>
  );
}
