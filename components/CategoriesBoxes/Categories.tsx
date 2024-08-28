import Category from "./Category";

export default function Categories() {
  return (
    <ul className="margins max flex  flex-wrap justify-center gap-[68px] gap-x-[10px] pt-[52px] text-black flex-row tab:justify-between items-center">
      <Category category="headphones" />
      <Category category="speakers" />
      <Category category="earphones" />
    </ul>
  );
}
