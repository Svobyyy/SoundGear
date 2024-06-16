"use client";

import Image from "next/image";
import { useState } from "react";

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
        className="z-40 mr-[20px] cursor-pointer sm:mr-[42px] tab:hidden"
        onClick={() => {
          setMenu((value) => !value);
        }}
      />

      <div
        className={`absolute left-0 top-full z-50 inline-block h-[340px] w-full bg-white tab:hidden ${Menu ? "opacity-100" : "-z-10 opacity-0"} transition-opacity`}
      ></div>

      <div
        className={`min-w-screen fixed bottom-0 left-0 right-0 top-0 inline-block min-h-screen bg-black tab:hidden ${Menu ? "z-0 opacity-40" : "-z-10 opacity-0"} transition-opacity`}
      />
    </>
  );
}
