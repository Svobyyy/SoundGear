import { Dispatch, SetStateAction } from "react";
import CategoryMenu from "./CategoryMenu";

type Props = {
  setMenu: Dispatch<SetStateAction<boolean>>;
};

export default function CategoriesMenu({ setMenu }: Props) {
  return (
    <ul className="margins flex flex-1 flex-col flex-wrap justify-center gap-[68px] gap-x-[10px] text-black sm:flex-row">
      <CategoryMenu category="headphones" setMenu={setMenu} />
      <CategoryMenu category="speakers" setMenu={setMenu} />
      <CategoryMenu category="earphones" setMenu={setMenu} />
    </ul>
  );
}
