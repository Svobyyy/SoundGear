"use client";

import Link from "next/link";

type props = {
  text: string;
  onClickAction: () => void;
};

export default function Button({ text, onClickAction }: props) {
  return (
    <Link
      onClick={onClickAction}
      href={"/checkout"}
      className="subtitle inline-block w-full bg-orange py-[15px] text-center uppercase leading-none text-white"
    >
      {text}
    </Link>
  );
}
