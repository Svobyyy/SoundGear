import Link from "next/link";
import Twitter from "./icons/Twitter";
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Categories from "./Categories";
import Image from "next/image";

type props = {
  categories?: boolean;
};

export default function Footer({ categories }: props) {
  return (
    <>
      {categories && <Categories />}

      <section className="paddings flex items-center justify-center">
        <div className="flex w-full max-w-[1110px] flex-col-reverse items-center justify-between gap-10 py-[120px] sm:gap-[64px] md:py-[96px] tab:py-[120px] lg:flex-row lg:gap-5">
          <div className="max-w-[400px] flex-1 text-center sm:max-w-[573px] lg:max-w-[445px]">
            <h2>
              Bringing you the <span className="text-orange">best</span> audio
              gear
            </h2>
            <p className="opacity-50">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <Image
            quality={100}
            width={540}
            alt="man with headphones"
            src={"/shared/desktop/image-best-gear.jpg"}
            height={588}
            className="hidden lg:inline-block"
          />
          <Image
            quality={100}
            width={1378}
            alt="man with headphones"
            src={"/shared/tablet/image-best-gear.jpg"}
            height={600}
            className="hidden min-h-[300px] object-cover sm:inline-block lg:hidden"
          />
          <Image
            quality={100}
            width={654}
            alt="man with headphones"
            src={"/shared/mobile/image-best-gear.jpg"}
            height={600}
            className="inline-block min-h-[300px] object-cover sm:hidden"
          />
        </div>
      </section>

      <section className="paddings flex flex-col items-center bg-black pb-[38px] text-white sm:pb-[46px] tab:pb-[48px]">
        <main className="relative flex w-full max-w-[1110px] flex-col items-center justify-center gap-8 pt-[52px] before:absolute before:top-0 before:h-[4px] before:w-[101px] before:bg-orange sm:items-start sm:justify-between sm:pt-[60px] tab:flex-row tab:items-center tab:pt-[75px]">
          <Link href={"/"} className="z-40">
            <h5 className="z-40 text-[15px] font-extrabold mob:text-[25px]">
              SoundGear
            </h5>
          </Link>
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

        <div className="tab:mt-9a mt-12 flex w-full max-w-[1110px] items-end justify-between gap-10 sm:mt-8">
          <p className="max-w-[680px] flex-1 text-center opacity-50 sm:text-start tab:max-w-[540px] z-20">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we’re open 7 days a week.
          </p>

          <ul className="z-40 hidden h-[24px] gap-[16px] transition-colors tab:flex">
            <li className="cursor-pointer">
              <a href={"https://www.facebook.com/"} target="_blank">
                <Facebook />
              </a>
            </li>
            <li className="cursor-pointer">
              <a href={"https://x.com/"} target="_blank">
                <Twitter />
              </a>
            </li>
            <li className="cursor-pointer">
              <a href={"https://www.instagram.com/"} target="_blank">
                <Instagram />
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-12 flex w-full max-w-[1110px] flex-col items-center justify-between gap-12 sm:mt-20 sm:flex-row tab:mt-14">
          <p className="z-40 font-bold opacity-50">
            Copyright 2021. All Rights Reserved
          </p>
          <ul className="z-40 flex h-[24px] gap-[16px] transition-colors tab:hidden">
            <li className="cursor-pointer">
              <a href={"https://www.facebook.com/"} target="_blank">
                <Facebook />
              </a>
            </li>
            <li className="cursor-pointer">
              <a href={"https://x.com/"} target="_blank">
                <Twitter />
              </a>
            </li>
            <li className="cursor-pointer">
              <a href={"https://www.instagram.com/"} target="_blank">
                <Instagram />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
