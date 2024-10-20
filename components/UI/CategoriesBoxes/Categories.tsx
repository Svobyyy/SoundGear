import Category from "./Category";
import {
  earphonesThumbnail,
  headphonesThumbnail,
  speakersThumbnail,
} from "@/lib/constants";

export default function Categories() {
  return (
    <ul className="margins max flex flex-col flex-wrap items-center justify-center gap-[68px] gap-x-[10px] pt-[52px] text-black sm:flex-row tab:justify-between">
      <Category category={headphonesThumbnail} />
      <Category category={speakersThumbnail} />
      <Category category={earphonesThumbnail} />
    </ul>
  );
}
