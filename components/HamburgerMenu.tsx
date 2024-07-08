"use client";

import Image from "next/image";
import { useState } from "react";
import Categories from "./Categories";

export default function HamburgerMenu() {
  const [Menu, setMenu] = useState(false);

  return (
    <>
      <Image
        src={"/shared/tablet/icon-hamburger.svg"}
        width={16}
        height={16}
        quality={100}
        alt="hamburger icon"
        className="z-40 cursor-pointer sm:mr-[42px] tab:hidden"
        onClick={() => {
          setMenu((value) => !value);
        }}
      />

      <div
        className={`absolute left-0 top-[90px] z-50 inline-block w-full bg-white pb-[35px] pt-[87px] md:pb-[67px] md:pt-[108px] tab:hidden ${Menu ? "opacity-100" : "z-[-1] opacity-0"} flex items-center justify-center transition-opacity`}
      >
        <Categories />
      </div>

      <div
        className={`min-w-screen fixed bottom-0 left-0 right-0 top-0 inline-block min-h-screen bg-black tab:hidden ${Menu ? "z-0 opacity-40" : "-z-10 opacity-0"} transition-opacity`}
      />
    </>
  );
}
