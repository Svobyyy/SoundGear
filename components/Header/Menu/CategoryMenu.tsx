import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import CategoryMenuText from "./CategoryMenuText";

type Props = {
  category: {
    name: string;
    source: string;
    width: number;
    height: number;
  };
  setMenu: Dispatch<SetStateAction<boolean>>;
};

export default function CategoryMenu({ category, setMenu }: Props) {
  const { name, source, width, height } = category;

  return (
    <li>
      <Link
        onClick={() => {
          setMenu((value) => !value);
        }}
        href={`/${name}`}
        className="group relative flex min-h-[165px] w-full flex-col items-center justify-end rounded-[8px] bg-gray transition-colors sm:w-[223px]"
      >
        <Image
          width={width}
          height={height}
          alt={`${category} image`}
          quality={100}
          className="absolute top-[-52px] h-[139px] transition-transform duration-300 group-hover:translate-y-[-5px]"
          src={source}
        />
        <CategoryMenuText category={name} />
      </Link>
    </li>
  );
}
