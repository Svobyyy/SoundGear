import Link from "next/link";

type props = {
  text: string;
};

export default function Button({ text }: props) {
  return (
    <Link
      href={"/checkout"}
      className="subtitle inline-block w-full bg-orange py-[15px] text-center uppercase leading-none text-white"
    >
      {text}
    </Link>
  );
}
