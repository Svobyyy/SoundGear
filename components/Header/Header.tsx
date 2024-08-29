import Link from "next/link";
import HamburgerMenu from "../Menu/HamburgerMenu";
import Cart from "../Cart/Cart";
import NavigationLink from "../UI/NavigationLink";
import NewProduct from "./NewProduct";

type Props = {
  background?: boolean;
  category?: boolean;
};

export default function Header({ background, category }: Props) {
  return (
    <header
      className={`sm:paddings relative flex flex-col items-center ${
        background
          ? "h-[600px] items-start bg-[url('/home/mobile/image-header.jpg')] bg-cover bg-center mob:h-[729px] mob:bg-[url('/home/tablet/image-header.jpg')] tab:bg-[url('/home/desktop/image-hero.jpg')] 2xl:bg-contain"
          : "bg-black"
      } text-white`}
    >
      <nav
        className={`paddings flex min-h-[90px] w-full max-w-[1110px] flex-row items-center justify-between sm:px-0 ${(background || category) && "border-b border-white border-opacity-25"} relative sm:justify-start tab:min-h-[97px] tab:justify-between`}
      >
        <HamburgerMenu />
        <Link href={"/"} className="z-40">
          <h5 className="z-40 text-[15px] font-extrabold mob:text-[25px]">
            SoundGear
          </h5>
        </Link>
        <ul className="subtitle z-40 hidden gap-[34px] font-bold tracking-[2px] transition-colors tab:flex">
          <NavigationLink link="home" />
          <NavigationLink link="headphones" />
          <NavigationLink link="speakers" />
          <NavigationLink link="earphones" />
        </ul>
        <Cart />
      </nav>

      {background && <NewProduct />}
    </header>
  );
}
