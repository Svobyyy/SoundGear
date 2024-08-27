import Image from "next/image";
import Button from "../UI/Button";

type Props = {
  name: string;
  description: string;
  slug: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  isNew?: boolean;
};

export default function ProductShowCase({
  name,
  description,
  slug,
  isNew,
  image: { mobile, tablet, desktop },
}: Props) {
  return (
    <div className="flex items-center justify-between">
      <Image
        width={540}
        height={560}
        alt={`${name} image`}
        quality={100}
        src={desktop}
      />

      <div className="max-w-[445px]">
        {isNew && (
          <p className="mb-4 text-[14px] tracking-[10px] text-orange">
            NEW PRODUCT
          </p>
        )}
        <h2>{name}</h2>
        <p className="mb-10 mt-8 opacity-50">{description}</p>
        <Button text="SEE PRODUCT" navigateTo={`${slug}`} maxWidth />
      </div>
    </div>
  );
}
