"use client";

import Link from "next/link";

type Props = {
  text: string;
  onClickAction: () => void;
};

export default function Button({ text, onClickAction }: Props) {
  return (
    <Link
      onClick={onClickAction}
      href={"/checkout"}
      className="subtitle -z-10 inline-block w-full bg-orange py-[17.5px] text-center uppercase leading-none text-white"
    >
      {text}
    </Link>
  );
}
