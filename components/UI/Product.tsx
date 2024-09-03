import Image from "next/image";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

export default function Product({ name, price, quantity, id }: CartItemProps) {

  return (
    <li className="gap flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-4">
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
    </li>
  );
}
