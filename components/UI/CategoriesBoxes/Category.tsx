import Image from "next/image";
import Link from "next/link";
import CategoryText from "./CategoryText";

type Props = {
  category: string;
};

export default function Category({ category }: Props) {
  return (
    <li className="group relative h-[165px] w-full min-w-[150px] rounded-[8px] bg-gray transition-colors sm:w-auto sm:max-w-[350px] sm:flex-1 md:h-[204px]">
      <Link
        href={`/${category}`}
        className="group relative flex h-full flex-col items-center justify-end"
      >
        <Image
          width={169}
          height={163}
          alt={`${category} image`}
          quality={100}
          className="absolute top-[-52px] h-[163px] w-[169px] object-cover transition-transform duration-300 group-hover:translate-y-[-5px]"
          src={`/shared/desktop/image-category-thumbnail-${category}.png`}
        />
        <CategoryText category={category} />
      </Link>
    </li>
  );
}
