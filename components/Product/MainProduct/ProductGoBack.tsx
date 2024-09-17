import Link from "next/link";

type Props = {
  category: string;
};

export default function ProductGoBack({ category }: Props) {
  return (
    <Link href={`/${category}`} className="group">
      <p className="mb-[24px] opacity-50 transition-all group-hover:text-orange group-hover:opacity-100 tab:mb-[56px]">
        Go Back
      </p>
    </Link>
  );
}
