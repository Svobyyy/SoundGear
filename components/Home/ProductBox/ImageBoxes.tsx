import Image from "next/image";
import { quaternaryHomeBox } from "@/lib/constants";

type Props = {
  image: {
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
  name?: string;
  primary?: string;
};

const primaryBoxStyle =
  "absolute top-[55px] z-[1] sm:top-[52px] lg:bottom-[-20px] lg:left-[75px] lg:top-[80px] main:left-[120px]";

export default function ImageBoxes({
  image: { desktop, tablet, mobile },
  name,
  primary,
}: Props) {
  return (
    <>
      {desktop && (
        <Image
          quality={100}
          alt={`${name || quaternaryHomeBox.name} photo`} // alt text for the productBox without any text
          width={desktop?.width}
          height={desktop?.height}
          className={`hidden ${primary ? `${primaryBoxStyle} lg:inline-block w-[420px] h-[520px]` : "absolute bottom-0 left-0 hidden h-full object-cover maintab:inline-block"}`}
          src={`${desktop?.source}`}
        />
      )}

      {tablet && (
        <Image
          quality={100}
          alt={`${name || quaternaryHomeBox.name} photo`}
          width={tablet?.width}
          height={tablet?.height}
          className={`hidden ${primary ? `${primaryBoxStyle} sm:inline-block lg:hidden w-[189px] h-[229px]` : "absolute bottom-0 left-0 hidden h-full object-cover maintab:inline-block tab:hidden"}`}
          src={`${tablet?.source}`}
        />
      )}

      {mobile && (
        <Image
          quality={100}
          alt={`${name || quaternaryHomeBox.name} photo`}
          width={mobile?.width}
          height={mobile?.height}
          className={`${primary ? `${primaryBoxStyle} sm:hidden w-[172px] h-[209px]` : "absolute bottom-0 left-0 h-full object-cover mob:hidden"}`}
          src={`${mobile?.source}`}
        />
      )}
    </>
  );
}
