import Image from "next/image";

export default function BestAudio() {
  return (
    <section className="paddings flex items-center justify-center">
      <div className="flex w-full max-w-[1110px] flex-col-reverse items-center justify-between gap-10 py-[120px] sm:gap-[64px] md:py-[96px] tab:py-[120px] lg:flex-row lg:gap-5">
        <div className="max-w-[400px] flex-1 text-center sm:max-w-[573px] lg:max-w-[445px]">
          <h2>
            Bringing you the <span className="text-orange">best</span> audio
            gear
          </h2>
          <p className="opacity-50">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
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
      </div>
    </section>
  );
}
