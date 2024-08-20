import Link from "next/link";
import React from "react";
import NavigationLink from "../UI/NavigationLink";

export default function FooterNavigation() {
  return (
    <main className="relative flex w-full max-w-[1110px] flex-col items-center justify-center gap-8 pt-[52px] before:absolute before:top-0 before:z-10 before:h-[4px] before:w-[101px] before:bg-orange sm:items-start sm:justify-between sm:pt-[60px] tab:flex-row tab:items-center tab:pt-[75px]">
      <Link href={"/"} className="z-40">
        <h5 className="z-40 text-[15px] font-extrabold mob:text-[25px]">
          SoundGear
        </h5>
      </Link>
      <ul className="subtitle z-40 flex flex-col gap-4 text-center font-bold tracking-[2px] transition-colors sm:flex-row sm:gap-[34px] sm:text-start">
        <NavigationLink link="home" />
        <NavigationLink link="headphones" />
        <NavigationLink link="speakers" />
        <NavigationLink link="earphones" />
      </ul>
    </main>
  );
}
