import { Dispatch, SetStateAction } from "react";
import CategoryMenu from "./CategoryMenu";

type props = {
  setMenu: Dispatch<SetStateAction<boolean>>;
};

export default function CategoriesMenu({ setMenu }: props) {
  return (
    <ul className="margins flex flex-wrap justify-center gap-[68px] gap-x-[10px] text-black">
      <CategoryMenu category="headphones" setMenu={setMenu} />
      <CategoryMenu category="speakers" setMenu={setMenu} />
      <CategoryMenu category="earphones" setMenu={setMenu} />
    </ul>
  );
}
