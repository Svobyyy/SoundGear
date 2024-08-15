import Image from "next/image";
import Counter from "./Counter";

type props = {
  name: string;
  price?: number;
  count?: number;
};

export default function Product({ name, price, count }: props) {
  return (
    <div className="flex items-center justify-between">

      <div className="flex gap-4">
        <Image
          width={64}
          height={64}
          alt={`${name} cart`}
          quality={100}
          className="rounded-lg"
          src={`/cart/${name}.jpg`}
        />
        <div>
          <h6>XX99 MK II</h6>
          <p className="font-bold opacity-50">$ 2,999</p>
        </div>
      </div>
      <Counter />

    </div>
  );
}
