import Link from "next/link";
import Button from "@/components/UI/Button";
import OthersImages from "./OthersImages";

export default function OthersItem({
  other: { name, slug, image },
}: {
  other: Others;
}) {
  return (
    <li className="group flex w-full flex-col items-center justify-end transition-colors">
      <Link href={`/${slug}`}>
        <OthersImages image={image} name={name} />
      </Link>
      <h5 className="my-[32px] uppercase sm:mt-10">{name}</h5>
      <Button text="SEE PRODUCT" navigateTo={slug} maxWidth />
    </li>
  );
}
