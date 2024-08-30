import Image from "next/image";
import Button from "../UI/Button";

type Props = {
  info: {
    name?: string;
    description?: string;
    image?: {
      desktop?: string;
      tablet?: string;
      mobile?: string;
    };
    category?: string;
    slug?: string;
  };
};

const assignHeight = (exists: string | undefined) => {
  return exists ? "h-[560px]" : "h-[320px]";
};

export default function ProductBoxes({
  info: { name, description, image, slug, category },
}: Props) {
  return (
    <div className={`${assignHeight(description)} bg-orange`}>
      {name && <h1>{name}</h1>}
      {description && <p>{description}</p>}
      {category && slug && (
        <Button text="SEE PRODUCT" navigateTo={`${category}/${slug}`} />
      )}
      {image && (
        <Image
          quality={100}
          alt={`${name} photo`}
          width={410}
          height={493}
          src={`${image.desktop}`}
        />
      )}
    </div>
  );
}
