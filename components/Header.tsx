import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <section className="bg-black text-white">
      <main className="paddings tab:justify-between tab:min-h-[97px] mx-auto flex min-h-[90px] w-full max-w-[1110px] flex-row items-center justify-between sm:justify-start">
        <Image
          src={"/shared/tablet/icon-hamburger.svg"}
          width={16}
          height={16}
          quality={100}
          alt="hamburger icon"
          className="tab:hidden mr-[20px] sm:mr-[42px]"
        />
        <h5 className="mob:text-[25px] text-[15px] font-extrabold">
          SoundGear
        </h5>
        <ul className="tab:flex subtitle hidden gap-[34px] font-bold tracking-[2px] transition-colors">
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
        <Image
          src={"/shared/desktop/icon-cart.svg"}
          width={23.33}
          height={20}
          quality={100}
          alt="cart icon"
          className="tab:ml-0 sm:ml-auto"
        />
      </main>
    </section>
  );
}
