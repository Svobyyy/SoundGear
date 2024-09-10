"use client";

import Link from "next/link";

type Props = {
  text: string;
  onClickAction: () => void;
  width?: boolean;
  href: string;
};

export default function Button({ text, onClickAction, width, href }: Props) {
  return (
    <Link
      onClick={onClickAction}
      href={`/${href}`}
      className={`${width ? "w-[160px]" : "w-full"} subtitle inline-block cursor-pointer bg-orange py-[17.5px] text-center uppercase leading-none text-white transition-colors hover:bg-orangeLight`}
    >
      {text}
    </Link>
  );
}
