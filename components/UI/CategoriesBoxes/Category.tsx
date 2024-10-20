import Image from "next/image";
import Link from "next/link";
import CategoryText from "./CategoryText";

type Props = {
  category: {
    name: string;
    source: string;
    width: number;
    height: number;
  };
};

export default function Category({ category }: Props) {
  const { name, source, width, height } = category;

  return (
    <li className="group relative h-[165px] w-full min-w-[150px] rounded-[8px] bg-gray transition-colors sm:w-auto sm:max-w-[350px] sm:flex-1 md:h-[204px]">
      <Link
        href={`/${name}`}
        className="group relative flex h-full flex-col items-center justify-end"
      >
        <Image
          width={width}
          height={height}
          alt={`${name} image`}
          quality={100}
          className={`absolute h-[139px] top-[-52px] transition-transform duration-300 group-hover:translate-y-[-5px]`}
          src={source}
        />
        <CategoryText category={name} />
      </Link>
    </li>
  );
}
