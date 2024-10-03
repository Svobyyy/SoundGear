"use client";

import Link from "next/link";

type Props = {
  text: string;
  onClickAction: () => void;
  width?: boolean;
  href: string;
  cancel?: boolean;
};

export default function Button({
  text,
  onClickAction,
  width,
  href,
  cancel,
}: Props) {
  return (
    <Link
      onClick={onClickAction}
      href={`/${href}`}
      className={`${width ? "w-[160px]" : "w-full"} subtitle inline-block cursor-pointer py-[17.5px] text-center uppercase leading-none text-white transition-colors ${cancel ? "bg-red hover:bg-[#ff6666]" : "bg-orange hover:bg-orangeLight"}`}
    >
      {text}
    </Link>
  );
}
