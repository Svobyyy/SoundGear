import Link from "next/link";

type Props = {
  text: string;
  navigateTo: string;
  maxWidth?: boolean;
};

export default function Button({ text, navigateTo, maxWidth }: Props) {
  return (
    <Link
      href={`/${navigateTo}`}
      className={` subtitle inline-block w-full bg-orange py-[17.5px] text-center uppercase leading-none text-white transition-colors hover:bg-orangeLight ${maxWidth && "max-w-[168px]"}`}
    >
      {text}
    </Link>
  );
}
