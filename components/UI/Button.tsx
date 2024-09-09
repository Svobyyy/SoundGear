import Link from "next/link";

type Props = {
  text: string;
  navigateTo: string;
  maxWidth?: boolean;
  black?: boolean; // Determines if the button should be styled as black
  trans?: boolean; // Determines if the button should be styled as black
};

const styleOfButton = (
  trans: boolean | undefined,
  black: boolean | undefined,
) => {
  const style =
    trans &&
    "border border-black bg-transparent text-black hover:bg-black hover:text-white";
  if (style) return style;

  return (
    (black ? "bg-black hover:bg-[#4C4C4C]" : "bg-orange hover:bg-orangeLight") +
    " text-white"
  );
};

export default function Button({
  text,
  navigateTo,
  maxWidth,
  black,
  trans,
}: Props) {
  return (
    <Link
      href={`/${navigateTo}`}
      className={`${styleOfButton(trans, black)} subtitle z-[2] inline-block w-full py-[17.5px] text-center uppercase leading-none transition-colors ${maxWidth ? "max-w-[168px]" : "w-full"}`}
    >
      {text}
    </Link>
  );
}
