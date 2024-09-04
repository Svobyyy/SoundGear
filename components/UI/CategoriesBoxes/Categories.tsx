import Category from "./Category";

export default function Categories() {
  return (
    <ul className="margins max flex flex-col flex-wrap items-center justify-center gap-[68px] gap-x-[10px] pt-[52px] text-black sm:flex-row tab:justify-between">
      <Category category="headphones" />
      <Category category="speakers" />
      <Category category="earphones" />
    </ul>
  );
}
