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
  "top-[55px] z-[1] h-[207px] w-[172px] sm:top-[52px] sm:h-[237px] sm:w-[197px] lg:bottom-[-20px] lg:left-[75px] lg:top-[80px] lg:h-[493px] lg:w-[410px] main:left-[120px]";

export default function ImageBoxes({
  image: { desktop, tablet, mobile },
  name,
  primary,
}: Props) {
  return (
    <>
      <Image
        quality={100}
        alt={`${name || quaternaryHomeBox.name} photo`}
        width={!name ? 540 : primary ? 410 : 1110}
        height={primary ? 493 : 1110}
        className={`${primary ? primaryBoxStyle : "bottom-0 left-0 h-full object-cover"} absolute`}
        src={`${desktop?.source}`}
      />
    </>
  );
}
