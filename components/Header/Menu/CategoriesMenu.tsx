import { Dispatch, SetStateAction } from "react";
import CategoryMenu from "./CategoryMenu";
import { setVisibility } from "@/lib/utils/utils";

import {
  earphonesThumbnail,
  headphonesThumbnail,
  speakersThumbnail,
} from "@/lib/constants";

type Props = {
  setMenu: Dispatch<SetStateAction<boolean>>;
  menu: boolean;
};

export default function CategoriesMenu({ setMenu, menu }: Props) {
  return (
    <section
      className={`absolute left-0 top-[90px] z-20 inline-block w-full rounded-b-lg bg-white pb-[35px] pt-[87px] md:pb-[67px] md:pt-[108px] tab:hidden ${setVisibility(menu)} flex items-center justify-center transition-all`}
    >
      <ul className="margins flex flex-1 flex-col flex-wrap justify-center gap-[68px] gap-x-[10px] text-black sm:flex-row">
        <CategoryMenu category={headphonesThumbnail} setMenu={setMenu} />
        <CategoryMenu category={speakersThumbnail} setMenu={setMenu} />
        <CategoryMenu category={earphonesThumbnail} setMenu={setMenu} />
      </ul>
    </section>
  );
}
