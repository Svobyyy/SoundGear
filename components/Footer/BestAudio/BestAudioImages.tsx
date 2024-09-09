import Image from "next/image";

export default function BestAudioImages() {
  return (
    <>
      <Image
        quality={100}
        width={540}
        alt="man with headphones"
        src={"/shared/desktop/image-best-gear.jpg"}
        height={588}
        className="hidden lg:inline-block"
      />
      <Image
        quality={100}
        width={1378}
        alt="man with headphones"
        src={"/shared/tablet/image-best-gear.jpg"}
        height={600}
        className="hidden min-h-[300px] object-cover sm:inline-block lg:hidden"
      />
      <Image
        quality={100}
        width={654}
        alt="man with headphones"
        src={"/shared/mobile/image-best-gear.jpg"}
        height={600}
        className="inline-block min-h-[300px] object-cover sm:hidden"
      />
    </>
  );
}
