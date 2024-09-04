import Image from "next/image";

type Props = {
  gallery: ProductGallery;
};

export default function ProductGallery({ gallery }: Props) {

  return (
    <div className="grid grid-cols-[445px_635px] gap-x-[30px] gap-y-[32px]">
      <Image
        src={gallery.first.desktop}
        alt={"gallery photo"}
        width={445}
        height={280}
        quality={100}
        className="col-start-1 row-start-1"
      />
      <Image
        src={gallery.second.desktop}
        alt={"gallery photo"}
        width={445}
        height={280}
        quality={100}
        className="col-start-1 row-start-2"
      />
      <Image
        src={gallery.third.desktop}
        alt={"gallery photo"}
        width={635}
        height={592}
        quality={100}
        className="col-start-2 row-span-2"
      />
    </div>
  );
}
