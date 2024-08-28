import Image from "next/image";
import Link from "next/link";

type Props = {
  category: string;
};

export default function Category({ category }: Props) {
  return (
    <li className="group relative h-[165px] w-[223px] w-full min-w-[150px] rounded-[8px] bg-gray transition-colors sm:w-auto sm:max-w-[350px] sm:flex-1 md:h-[204px]">
      <Link
        href={`/${category}`}
        className="group relative flex h-full flex-col items-center justify-end"
      >
        <Image
          width={169}
          height={163}
          alt={`${category} image`}
          quality={100}
          className="absolute top-[-52px] transition-transform group-hover:translate-y-[-5px]"
          src={`/shared/desktop/image-category-thumbnail-${category}.png`}
        />
        <p className="mb-[17px] text-[15px] font-bold uppercase tracking-[1.07px] md:mb-[15px] md:text-[18px] md:tracking-[1.29px]">
          {category}
        </p>
        <div className="mb-[22px] flex items-center gap-[14px] md:mb-[30px]">
          <p className="subtitle leading-none opacity-50 group-hover:text-orange group-hover:opacity-100">
            SHOP
          </p>
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
    </li>
  );
}
