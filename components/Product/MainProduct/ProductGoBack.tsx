import Link from "next/link";

type Props = {
  category: string;
};

export default function ProductGoBack({ category }: Props) {
  return (
    <Link href={`/${category}`}>
      <p className="mb-[24px] opacity-50 tab:mb-[56px]">Go Back</p>
    </Link>
  );
}
