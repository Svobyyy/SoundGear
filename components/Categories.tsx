import Category from "./Category";

export default function Categories() {
  return (
    <ul className="flex flex-wrap justify-center gap-[68px] gap-x-[10px] text-black margins">
      <li>
        <Category category="headphones" />
      </li>
      <li>
        <Category category="speakers" />
      </li>
      <li>
        <Category category="earphones" />
      </li>
    </ul>
  );
}
