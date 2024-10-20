import Arrow from "@/components/icons/Arrow";

export default function CategoryMenuText({ category }: { category: string }) {
  return (
    <>
      <p className="mb-[17px] text-[15px] font-bold uppercase tracking-[1.07px]">
        {category}
      </p>
      <div className="mb-[22px] flex items-center gap-[14px]">
        <p className="subtitle opacity-75 group-hover:text-orange group-hover:opacity-100">
          SHOP
        </p>
        <Arrow />
      </div>
    </>
  );
}
