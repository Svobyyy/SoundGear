"use client";

import Image from "next/image";
import { useState } from "react";
import CategoriesMenu from "./CategoriesMenu";
import BackgroundOverlay from "../UI/BackgroundOverlay";

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
        <CategoriesMenu setMenu={setMenu} />
      </div>

      <BackgroundOverlay showSwitch={Menu} isMenu />
    </>
  );
}
