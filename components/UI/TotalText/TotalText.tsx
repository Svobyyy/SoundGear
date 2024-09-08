import { formatter } from "@/lib/utils/products/ProductUtilsClient";

type Props = {
  name: string;
  price: number;
  orange?: boolean;
  space?: boolean;
};

export default function TotalText({ name, price, orange, space }: Props) {
  return (
    <div className={`${space ? "mb-6" : "mb-2"} flex justify-between gap-5`}>
      <p className="opacity-50">{name}</p>
      <h6 className={`${orange && "text-orange"}`}>
        {formatter.format(price)}
      </h6>
    </div>
  );
}
