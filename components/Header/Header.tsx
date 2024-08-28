import Link from "next/link";
import HamburgerMenu from "../Menu/HamburgerMenu";
import Cart from "../Cart/Cart";
import NavigationLink from "../UI/NavigationLink";
import Button from "../UI/Button";

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

      {background && (
        <section className="mt-[108px] flex w-full max-w-[1110px] justify-center sm:mt-[128px] tab:justify-start paddings sm:px-0">
          <div className="flex max-w-[378px] flex-col items-center justify-center text-center tab:items-start tab:justify-start tab:text-start">
            <p className="mb-6 text-[14px] tracking-[10px] text-white opacity-50 sm:mb-4">
              NEW PRODUCT
            </p>
            <h1 className="sm:max-w-[400px]">XX99 Mark II HeadphoneS</h1>
            <p className="my-7 opacity-50 sm:mb-10 sm:mt-6">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button text="SEE PRODUCT" navigateTo={`headphones`} maxWidth />
          </div>
        </section>
      )}
    </header>
  );
}
