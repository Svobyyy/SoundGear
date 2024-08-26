import Link from "next/link";

type Props = {
  link: string;
};

const returnHome = (link: string) => {
  return link !== "home" ? link : "/";
};

export default function NavigationLink({ link }: Props) {
  return (
    <li className="cursor-pointer uppercase hover:text-orange">
      <Link href={returnHome(link)}>{link.toUpperCase()}</Link>
    </li>
  );
}
