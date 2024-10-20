import Link from "next/link";

type Props = {
  category: string;
};

export default function ProductGoBack({ category }: Props) {
  return (
    <Link
      href={`/${category}`}
      className="group mb-[24px] inline-block tab:mb-[56px]"
    >
      <p className="opacity-75 transition-all group-hover:text-orange group-hover:opacity-100">
        Go Back
      </p>
    </Link>
  );
}
