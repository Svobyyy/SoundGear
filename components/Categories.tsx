import Category from "./Category";

export default function Categories() {
  return (
    <ul className="margins flex flex-wrap justify-center gap-[68px] gap-x-[10px] text-black">
      <Category category="headphones" />
      <Category category="speakers" />
      <Category category="earphones" />
    </ul>
  );
}
