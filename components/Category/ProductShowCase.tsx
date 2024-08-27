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
  category: string;
  isNew?: boolean;
  isOdd: boolean;
};

export default function ProductShowCase({
  name,
  description,
  slug,
  isNew,
  category,
  isOdd,
  image: { mobile, tablet, desktop },
}: Props) {
  return (
    <div
      className={`flex items-center justify-between gap-8 text-center sm:gap-[52px] lg:gap-5 lg:text-left ${isOdd && "lg:flex-row-reverse"} flex-col lg:flex-row`}
    >
      <Image
        width={540}
        height={560}
        alt={`${name} image`}
        quality={100}
        className="hidden lg:inline-block"
        src={desktop}
      />
      <Image
        width={1378}
        height={704}
        alt={`${name} image`}
        quality={100}
        className="hidden min-h-[400px] object-cover sm:inline-block lg:hidden"
        src={tablet}
      />
      <Image
        quality={100}
        width={654}
        alt={`${name} image`}
        src={mobile}
        height={704}
        className="inline-block min-h-[380px] object-cover sm:hidden"
      />

      <div className="flex max-w-[572px] flex-col items-center lg:max-w-[445px] lg:items-start">
        {isNew && (
          <p className="mb-6 text-[14px] tracking-[10px] text-orange sm:mb-4">
            NEW PRODUCT
          </p>
        )}
        <h2 className="max-w-[200px] sm:max-w-[400px]">{name}</h2>
        <p className="mb-6 mt-6 opacity-50 sm:mt-8 lg:mb-10">{description}</p>
        <Button
          text="SEE PRODUCT"
          navigateTo={`${category}/${slug}`}
          maxWidth
        />
      </div>
    </div>
  );
}
