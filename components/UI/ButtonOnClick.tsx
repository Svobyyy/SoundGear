"use client";

import Link from "next/link";

type Props = {
  text: string;
  onClickAction: () => void;
  width?: boolean;
};

export default function Button({ text, onClickAction, width }: Props) {
  return (
    <Link
      onClick={onClickAction}
      href={"/checkout"}
      className={`${width && "w-[160px]"} subtitle inline-block w-full cursor-pointer bg-orange py-[17.5px] text-center uppercase leading-none text-white transition-colors hover:bg-orangeLight`}
    >
      {text}
    </Link>
  );
}
