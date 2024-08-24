import Image from "next/image";

type props = {
  name: string;
  price?: number;
  count?: number;
  quantity?: boolean;
};

export default function Product({ name, price, count, quantity }: props) {
  return (
    <li className="gap flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-4">
        <Image
          width={64}
          height={64}
          alt={`${name} cart`}
          quality={100}
          className="rounded-lg"
          src={`/cart/${name}.jpg`}
        />
        <div>
          <p className="font-bold">XX99 MK II</p>
          <p className="font-bold opacity-50">$ 2,999</p>
        </div>
      </div>
      {/* <Counter quantity={quantity} /> */}
    </li>
  );
}
