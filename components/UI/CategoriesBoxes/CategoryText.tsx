import Arrow from "@/components/icons/Arrow";

type Props = {
  category: string;
};

export default function CategoryText({ category }: Props) {
  return (
    <>
      <p className="mb-[17px] text-[15px] font-bold uppercase tracking-[1.07px] md:mb-[15px] md:text-[18px] md:tracking-[1.29px]">
        {category}
      </p>
      <div className="mb-[22px] flex items-center gap-[14px] md:mb-[30px]">
        <p className="subtitle leading-none opacity-50 transition-all group-hover:text-orange group-hover:opacity-100">
          SHOP
        </p>
        <Arrow />
      </div>
    </>
  );
}
