"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "../UI/Button";
import Product from "../UI/Product";

export default function Cart() {
  const [CartState, setCartState] = useState(false);
  return (
    <>
      <Image
        src={"/shared/desktop/icon-cart.svg"}
        width={23.33}
        height={20}
        quality={100}
        alt="cart icon"
        onClick={() => {
          setCartState((value) => !value);
        }}
        className="z-40 cursor-pointer sm:ml-auto tab:ml-0"
      />

      <section
        className={`absolute right-0 top-[122px] z-20 w-full rounded-lg bg-white p-[31px] text-black transition-opacity sm:max-w-[377px] tab:top-[129px] ${CartState ? "z-20" : "-z-10 opacity-0"}`}
      >
        <div className="flex justify-between">
          <h6>Cart()</h6>
          <p className="cursor-pointer underline opacity-50">Remove all</p>
        </div>

        <div className="flex flex-col gap-6 py-8">
          <Product name={"XX99 MK II"} count={2} />
          <Product name={"XX99 MK II"} count={10} />
          <Product name={"XX99 MK II"} count={10} />
        </div>

        <div className="mb-6 flex justify-between">
          <p className="opacity-50">TOTAL</p>
          <h6>$5,396</h6>
        </div>

        <Button
          text="checkout"
          onClickAction={() => {
            setCartState((value) => !value);
          }}
        />
      </section>

      <div
        className={`min-w-screen fixed bottom-0 left-0 right-0 top-0 inline-block min-h-screen bg-black ${CartState ? "z-10 opacity-40" : "-z-10 opacity-0"} transition-opacity`}
      />
    </>
  );
}
