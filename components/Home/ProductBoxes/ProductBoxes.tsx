import Image from "next/image";
import Button from "../../UI/Button";
import Pattern from "../../icons/Pattern";
import ImageBoxes from "./ImageBoxes";

type Props = {
  info: {
    name?: string;
    description?: string;
    image?: {
      desktop?: {
        source: string;
        width: number;
        height: number;
      };
      tablet?: {
        source: string;
        width: number;
        height: number;
      };
      mobile?: {
        source: string;
        width: number;
        height: number;
      };
    };
    category?: string;
    slug?: string;
  };
};

const assignHeight = (exists: string | undefined) => {
  return exists ? "h-[600px] sm:h-[720px] lg:h-[560px]" : "h-[320px]";
};

export default function ProductBoxes({
  info: { name, description, image, slug, category },
}: Props) {
  return (
    <div
      className={`${assignHeight(description)} relative mt-[170px] flex overflow-hidden bg-orange ${description ? "items-end justify-center lg:items-center lg:justify-end" : "items-center justify-center"} rounded-lg`}
    >
      {image && <ImageBoxes image={image} name={name} primary={description} />}
      {description && <Pattern />}

      <div
        className={`z-[2] max-w-[349px] lg:mr-[95px] ${description && "mb-[55px] text-center text-white sm:mb-[64px] lg:mb-0 lg:text-left"} paddings flex flex-col items-center justify-center`}
      >
        {name && <h1 className="max-w-[200px] sm:max-w-none">{name}</h1>}
        {description && <p className="mb-6 mt-6 sm:mb-10">{description}</p>}
        {category && slug && (
          <Button
            text="SEE PRODUCT"
            navigateTo={`${category}/${slug}`}
            maxWidth
            black
          />
        )}
      </div>
    </div>
  );
}
