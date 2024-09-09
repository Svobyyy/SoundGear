import Categories from "../UI/CategoriesBoxes/Categories";
import BestAudio from "./BestAudio/BestAudio";
import FooterInfo from "./FooterMain/FooterInfo";
type Props = {
  categories?: boolean;
  bestaudio?: boolean;
};

export default function Footer({ categories, bestaudio }: Props) {
  return (
    <>
      {categories && <Categories />}
      {(bestaudio && <BestAudio />) || (categories && <BestAudio />)}
      <FooterInfo />
    </>
  );
}
