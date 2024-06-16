import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  return (
    <header className="bg-black text-white">
      <nav className="paddings relative mx-auto flex min-h-[90px] w-full max-w-[1110px] flex-row items-center justify-between sm:justify-start tab:min-h-[97px] tab:justify-between">
        <HamburgerMenu />
        <h5 className="z-40 text-[15px] font-extrabold mob:text-[25px]">
          SoundGear
        </h5>
        <ul className="subtitle z-40 hidden gap-[34px] font-bold tracking-[2px] transition-colors tab:flex">
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
          className="z-40 sm:ml-auto tab:ml-0"
        />
      </nav>
    </header>
  );
}
