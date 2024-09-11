import { Dispatch, SetStateAction, useState } from "react";
import OrderProduct from "./OrderProduct";

const toggleViewMore = (setViewMore: Dispatch<SetStateAction<boolean>>) => {
  setViewMore((view) => !view);
};

export default function OrderProducts() {
  const [viewMore, setViewMore] = useState(false);

  return (
    <ul className="flex w-full flex-col items-center justify-center gap-4 p-6 transition-all">
      <OrderProduct viewMore={viewMore} />
      <button
        onClick={() => toggleViewMore(setViewMore)}
        className="cursor-pointer text-[12px] font-bold leading-[auto] tracking-[0.21px] opacity-50"
      >
        {viewMore ? "View Less" : "View More"}
      </button>
    </ul>
  );
}
