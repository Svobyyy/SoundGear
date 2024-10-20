import NewProduct from "./NewProduct";
import Navbar from "./Navbar";

type Props = {
  background?: boolean;
  category?: boolean;
};

export default function Header({ background, category }: Props) {
  return (
    <header
      className={`sm:paddings relative flex w-full flex-col items-center ${
        background
          ? "mb-10 h-[600px] items-start bg-[url('/home/mobile/image-header.webp')] bg-cover bg-center mob:h-[729px] mob:bg-[url('/home/tablet/image-header.webp')] sm:mb-[96px] tab:mb-[120px] tab:bg-[url('/home/desktop/image-hero.webp')] 2xl:bg-contain"
          : "bg-black"
      } text-white`}
    >
      <Navbar background={background} category={category} />
      {background && <NewProduct />}
    </header>
  );
}
