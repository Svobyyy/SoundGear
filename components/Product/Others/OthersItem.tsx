import Link from "next/link";
import Button from "@/components/UI/Button";
import OthersImages from "./OthersImages";

export default function OthersItem({
  other: { name, slug, image },
}: {
  other: Others;
}) {
  return (
    <li className="group w-full transition-colors">
      <Link
        href={`/${slug}`}
        className="group flex flex-col items-center justify-end"
      >
        <OthersImages image={image} name={name} />
        <h5 className="my-[32px] uppercase sm:mt-10">{name}</h5>
        <Button text="SEE PRODUCT" navigateTo={slug} maxWidth />
      </Link>
    </li>
  );
}
