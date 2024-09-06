import Image from "next/image";
import Counter from "./Counters/Counter";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

export default function Product({
  name,
  price,
  id,
  quantity,
}: CartCounterProps & { quantity?: number }) {
  return (
    <li className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-1 items-center gap-4">
        <Image
          width={64}
          height={64}
          alt={`${name} cart`}
          quality={100}
          className="rounded-lg"
          src={`/cart/${id}.jpg`}
        />
        <div>
          <p className="font-bold">{name}</p>
          <p className="font-bold opacity-50">{formatter.format(price)}</p>
        </div>
      </div>
      {quantity !== undefined ? (
        <p>x{quantity}</p>
      ) : (
        <Counter id={id} name={name} price={price} />
      )}
    </li>
  );
}
