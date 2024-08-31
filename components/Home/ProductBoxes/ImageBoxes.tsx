import Image from "next/image";
import { quaternaryHomeBox } from "@/lib/constants";
import { table } from "console";

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
      {desktop && (
        <Image
          quality={100}
          alt={`${name || quaternaryHomeBox.name} photo`}
          width={desktop?.width}
          height={desktop?.height}
          className={`${primary ? primaryBoxStyle : "maintab:inline-block bottom-0 left-0 hidden h-full object-cover"} absolute`}
          src={`${desktop?.source}`}
        />
      )}

      {tablet && (
        <Image
          quality={100}
          alt={`${name || quaternaryHomeBox.name} photo`}
          width={tablet?.width}
          height={tablet?.height}
          className={`maintab:hidden absolute bottom-0 left-0 hidden h-full object-cover mob:inline-block`}
          src={`${tablet?.source}`}
        />
      )}

      {mobile && (
        <Image
          quality={100}
          alt={`${name || quaternaryHomeBox.name} photo`}
          width={mobile?.width}
          height={mobile?.height}
          className={`absolute bottom-0 left-0 h-full object-cover mob:hidden`}
          src={`${mobile?.source}`}
        />
      )}
    </>
  );
}
