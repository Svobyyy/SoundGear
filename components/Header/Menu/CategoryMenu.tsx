import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import Arrow from "../../icons/Arrow";

type Props = {
  category: string;
  setMenu: Dispatch<SetStateAction<boolean>>;
};

export default function CategoryMenu({ category, setMenu }: Props) {
  return (
    <li>
      <Link
        onClick={() => {
          setMenu((value) => !value);
        }}
        href={`/${category}`}
        className="group relative flex min-h-[165px] w-full flex-col items-center justify-end rounded-[8px] bg-gray transition-colors sm:w-[223px]"
      >
        <Image
          width={147}
          height={133}
          alt={`${category} image`}
          quality={100}
          className="absolute top-[-52px] transition-transform duration-300 group-hover:translate-y-[-5px]"
          src={`/shared/desktop/image-category-thumbnail-${category}.png`}
        />
        <p className="mb-[17px] text-[15px] font-bold uppercase tracking-[1.07px]">
          {category}
        </p>
        <div className="mb-[22px] flex items-center gap-[14px]">
          <p className="subtitle opacity-50 group-hover:text-orange group-hover:opacity-100">
            SHOP
          </p>
          <Arrow />
        </div>
      </Link>
    </li>
  );
}
