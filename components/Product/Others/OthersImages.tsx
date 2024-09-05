import Image from "next/image";

export default function OthersImages({
  image: { desktop, tablet, mobile },
  name,
}: {
  image: { desktop: string; tablet: string; mobile: string };
  name: string;
}) {
  return (
    <>
      <Image
        width={350}
        height={318}
        alt={`${name} image`}
        quality={100}
        className="hidden min-h-[300px] rounded-lg object-cover transition-transform duration-300 group-hover:translate-y-[-5px] tab:inline-block"
        src={desktop}
      />
      <Image
        quality={100}
        width={446}
        alt={`${name} image`}
        src={tablet}
        height={636}
        className="hidden min-h-[300px] object-cover transition-transform duration-300 group-hover:translate-y-[-5px] sm:inline-block tab:hidden"
      />

      <Image
        quality={100}
        width={654}
        alt={`${name} image`}
        src={mobile}
        height={240}
        className="inline-block min-h-[0px] object-cover sm:hidden"
      />
    </>
  );
}
