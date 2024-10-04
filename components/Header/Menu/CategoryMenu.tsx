import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import CategoryMenuText from "./CategoryMenuText";

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
        <CategoryMenuText category={category} />
      </Link>
    </li>
  );
}
