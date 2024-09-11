import { useCartContext } from "@/contexts/CartContextProvider";
import { formatPrice } from "@/lib/utils/products/ProductUtilsClient";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function OrderProduct({ viewMore }: { viewMore: boolean }) {
  const { cart } = useCartContext();

  //Fade In Animation
  const [isVisible, setIsVisible] = useState(viewMore);

  useEffect(() => {
    if (viewMore) setIsVisible(true);
    else setIsVisible(false);
  }, [viewMore]);

  return cart.map(({ price, name, quantity, id }, index) => (
    <li
      key={id}
      className={`gap-4 flex w-full max-w-none justify-between border-b-[1px] border-gray pb-3 transition-opacity duration-500 ease-in-out sm:max-w-[198px] ${index > 0 && !viewMore ? "hidden" : ""} ${index === 0 ? "opacity-100" : isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <section className="flex gap-4">
        <Image
          src={`/cart/${id}.jpg`}
          width={50}
          height={50}
          quality={100}
          alt={`${name} image`}
          className="h-[50px] w-[50px] object-cover"
        />
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-[14px] font-bold opacity-50">
            {formatPrice(price)}
          </p>
        </div>
      </section>

      <p className="font-bold opacity-50">x{quantity}</p>
    </li>
  ));
}
