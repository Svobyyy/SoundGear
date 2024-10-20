import NavigationLink from "@/components/UI/NavigationLink";
import Link from "next/link";
import React from "react";

export default function FooterNavigation() {
  return (
    <main className="relative flex w-full max-w-[1110px] flex-col items-center justify-center gap-8 pt-[52px] before:absolute before:top-0 before:z-50 before:h-[4px] before:w-[101px] before:bg-orange sm:items-start sm:justify-between sm:pt-[60px] tab:flex-row tab:items-center tab:pt-[75px]">
      <Link href={"/"} className="z-50">
        <p className="logoTitle z-50 transition-colors hover:text-orange">
          SoundGear
        </p>
      </Link>
      <ul className="subtitle z-50 flex flex-col gap-4 text-center font-bold tracking-[2px] transition-colors sm:flex-row sm:gap-[34px] sm:text-start">
        <NavigationLink link="home" />
        <NavigationLink link="headphones" />
        <NavigationLink link="speakers" />
        <NavigationLink link="earphones" />
      </ul>
    </main>
  );
}
