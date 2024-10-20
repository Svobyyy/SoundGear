import ShowCaseImages from "./ProductShowCase/ShowCaseImages";
import ShowCaseText from "./ProductShowCase/ShowCaseText";

type Props = {
  slug: string;
  isOdd: boolean;
  isFirst: boolean;
};

export default function ProductShowCase({ slug, isOdd, isFirst }: Props) {
  return (
    <div
      className={`flex items-center justify-between gap-8 text-center sm:gap-[52px] lg:gap-5 lg:text-left ${isOdd && "lg:flex-row-reverse"} flex-col lg:flex-row`}
    >
      <ShowCaseImages slug={slug} isFirst={isFirst} />
      <ShowCaseText slug={slug} />
    </div>
  );
}
