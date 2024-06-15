import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="bg-black text-white">
      <main className="paddings tab:flex-row tab:items-center mx-auto flex w-full max-w-[1110px] flex-col items-center justify-center gap-8 sm:items-start sm:justify-between">
        <h5 className="mob:text-[25px] text-[15px] font-extrabold">
          SoundGear
        </h5>
        <ul className="subtitle flex flex-col gap-4 text-center font-bold tracking-[2px] transition-colors sm:flex-row sm:gap-[34px] sm:text-start">
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

      <div className="paddings mx-auto flex w-full max-w-[1110px] items-end justify-between mt-9">
        <p className="max-w-[540px] flex-1">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <ul className="flex h-[24px] gap-[16px] transition-colors">
          <li className="cursor-pointer hover:fill-orange">
            <Link href={"/"}>
              <Image
                src={"/shared/desktop/icon-facebook.svg"}
                width={24}
                height={24}
                quality={100}
                alt="icon facebook"
              />
            </Link>
          </li>
          <li className="cursor-pointer hover:text-orange">
            <Link href={"/headphones"}>
              <Image
                src={"/shared/desktop/icon-twitter.svg"}
                width={24}
                height={24}
                quality={100}
                alt="icon twitter"
              />
            </Link>
          </li>
          <li className="cursor-pointer hover:text-orange">
            <Link href={"/speakers"}>
              <Image
                src={"/shared/desktop/icon-instagram.svg"}
                width={24}
                height={24}
                quality={100}
                alt="icon instagram"
              />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
