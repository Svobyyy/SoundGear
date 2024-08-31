import Image from "next/image";
import Button from "../UI/Button";
import Pattern from "../icons/Pattern";

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
  return exists ? "h-[600px] sm:h-[720px] lg:h-[560px]" : "h-[320px]";
};

export default function ProductBoxes({
  info: { name, description, image, slug, category },
}: Props) {
  return (
    <div
      className={`${assignHeight(description)} relative mt-[170px] flex overflow-hidden bg-orange ${description ? "items-end justify-center lg:items-center lg:justify-end" : "items-center justify-center"} rounded-lg`}
    >
      {image && (
        <Image
          quality={100}
          alt={`${name} photo`}
          width={410}
          height={493}
          className="main:left-[120px] absolute top-[55px] z-[1] h-[207px] w-[172px] sm:top-[52px] sm:h-[237px] sm:w-[197px] lg:bottom-[-20px] lg:left-[75px] lg:top-[80px] lg:h-[493px] lg:w-[410px]"
          src={`${image.desktop}`}
        />
      )}
      {description && <Pattern />}

      <div
        className={`z-[2] max-w-[349px] lg:mr-[95px] ${description && "mb-[55px] text-center text-white sm:mb-[64px] lg:mb-0 lg:text-left"} flex flex-col items-center justify-center paddings`}
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
