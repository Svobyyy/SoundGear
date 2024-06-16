import Link from "next/link";
import Twitter from "./icons/Twitter";
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";

export default function Footer() {
  return (
    <section className="bg-black pb-[38px] text-white sm:pb-[46px] tab:pb-[48px]">
      <main className="paddings relative mx-auto flex w-full max-w-[1110px] flex-col items-center justify-center gap-8 pt-[52px] before:absolute before:top-0 before:h-[4px] before:w-[101px] before:bg-orange sm:items-start sm:justify-between sm:pt-[60px] sm:before:left-10 tab:flex-row tab:items-center tab:pt-[75px]">
        <h5 className="z-40 text-[15px] font-extrabold mob:text-[25px]">
          SoundGear
        </h5>
        <ul className="subtitle z-40 flex flex-col gap-4 text-center font-bold tracking-[2px] transition-colors sm:flex-row sm:gap-[34px] sm:text-start">
          <li className="cursor-pointer hover:text-orange">
            <Link href={"/"}>HOME</Link>
          </li>
          <li className="cursor-pointer hover:text-orange">
            <Link href={"/headphones"}>HEADPHONES</Link>
          </li>
          <li className="cursor-pointer hover:text-orange">
            <Link href={"/speakers"}>SPEAKERS</Link>
          </li>
          <li className="cursor-pointer hover:text-orange">
            <Link href={"/earphones"}>EARPHONES</Link>
          </li>
        </ul>
      </main>

      <div className="paddings mx-auto mt-12 flex w-full max-w-[1110px] items-end justify-between gap-10 sm:mt-8 tab:mt-9">
        <p className="max-w-[680px] flex-1 text-center opacity-50 sm:text-start tab:max-w-[540px]">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        <ul className="z-40 hidden h-[24px] gap-[16px] transition-colors tab:flex">
          <li className="cursor-pointer">
            <Link href={"/"}>
              <Facebook />
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href={"/"}>
              <Twitter />
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href={"/"}>
              <Instagram />
            </Link>
          </li>
        </ul>
      </div>

      <div className="paddings mx-auto mt-12 flex w-full max-w-[1110px] flex-col items-center justify-between gap-12 sm:mt-20 sm:flex-row tab:mt-14">
        <p className="z-40 font-bold opacity-50">
          Copyright 2021. All Rights Reserved
        </p>
        <ul className="z-40 flex h-[24px] gap-[16px] transition-colors tab:hidden">
          <li className="cursor-pointer">
            <Link href={"/"}>
              <Facebook />
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href={"/"}>
              <Twitter />
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href={"/"}>
              <Instagram />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
