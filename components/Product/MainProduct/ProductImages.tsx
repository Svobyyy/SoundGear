import Image from "next/image";

type Props = {
  name: string;
  desktop: string;
  tablet: string;
  mobile: string;
};

export default function ProductImages({ desktop, tablet, mobile, name }: Props) {
  return (
    <>
      <Image
        width={540}
        height={560}
        alt={`${name} image`}
        quality={100}
        className="hidden rounded-lg lg:inline-block"
        src={desktop}
      />
      <Image
        width={562}
        height={960}
        alt={`${name} image`}
        quality={100}
        className="hidden max-h-[480px] max-w-[380px] rounded-lg object-cover sm:inline-block lg:hidden"
        src={tablet}
      />
      <Image
        quality={100}
        width={654}
        alt={`${name} image`}
        src={mobile}
        height={704}
        className="inline-block min-h-[380px] rounded-lg object-cover sm:hidden"
      />
    </>
  );
}
