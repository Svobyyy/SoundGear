import Link from "next/link";
import Cart from "../Cart/Cart";
import NavigationLink from "../UI/NavigationLink";
import HamburgerMenu from "./Menu/HamburgerMenu";

type Props = {
  background?: boolean;
  category?: boolean;
};

export default function Navbar({ background, category }: Props) {
  return (
    <nav
      className={`paddings flex min-h-[90px] w-full max-w-[1110px] flex-row items-center justify-between sm:px-0 ${background || category ? "border-b border-white border-opacity-25" : ""} relative sm:justify-start tab:min-h-[97px] tab:justify-between`}
    >
      <HamburgerMenu />
      <Link href={"/"} className="z-50">
        <h5 className="z-50 text-[15px] font-extrabold transition-colors hover:text-orange mob:text-[25px]">
          SoundGear
        </h5>
      </Link>
      <ul className="subtitle z-50 hidden gap-[34px] font-bold tracking-[2px] transition-colors tab:flex">
        <NavigationLink link="home" />
        <NavigationLink link="headphones" />
        <NavigationLink link="speakers" />
        <NavigationLink link="earphones" />
      </ul>
      <Cart />
    </nav>
  );
}
