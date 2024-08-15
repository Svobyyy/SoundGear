import Link from "next/link";
import HamburgerMenu from "./Menu/HamburgerMenu";
import Cart from "./Cart/Cart";

type props = {
  line?: boolean;
  background?: boolean;
  category?: boolean;
};

export default function Header({ line, background }: props) {
  return (
    <header
      className={`relative flex justify-center ${
        background
          ? "h-[600px] items-start bg-[url('/home/mobile/image-header.jpg')] bg-cover bg-center mob:h-[729px] mob:bg-[url('/home/tablet/image-header.jpg')] md:bg-[url('/home/desktop/image-hero.jpg')] 2xl:bg-contain"
          : "bg-black"
      } text-white`}
    >
      <nav
        className={`margins flex min-h-[90px] w-full max-w-[1110px] flex-row items-center justify-between ${line && "border-b border-white border-opacity-25"} sm:justify-start tab:min-h-[97px] tab:justify-between`}
      >
        <HamburgerMenu />
        <Link href={"/"} className="z-40">
          <h5 className="z-40 text-[15px] font-extrabold mob:text-[25px]">
            SoundGear
          </h5>
        </Link>
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
        <Cart />
      </nav>
    </header>
  );
}
