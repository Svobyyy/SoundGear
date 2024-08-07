import Image from "next/image";
import Link from "next/link";

type props = {
  category: string;
};

export default function Category({ category }: props) {
  return (
    <Link
      href={`/${category}`}
      className="relative flex min-h-[165px] w-[223px] flex-col items-center justify-end rounded-[8px] bg-gray transition-colors group"
    >
      <Image
        width={147}
        height={133}
        alt={`${category} image`}
        quality={100}
        className="absolute top-[-52px] h-[133px]"
        src={`/shared/desktop/image-category-thumbnail-${category}.png`}
      />
      <p className="mb-[17px] text-[15px] font-bold tracking-[1.07px] uppercase">
        {category}
      </p>
      <div className="mb-[22px] flex items-center gap-[14px]">
        <p className="subtitle opacity-50 group-hover:text-orange group-hover:opacity-100">SHOP</p>
        <Image
          width={5}
          height={10}
          alt="arrow icon"
          quality={100}
          className="h-[10px]"
          src={"/shared/desktop/icon-arrow-right.svg"}
        />
      </div>
    </Link>
  );
}
