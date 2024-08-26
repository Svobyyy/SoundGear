import Categories from "../Categories";
import BestAudio from "./BestAudio";
import FooterInfo from "./FooterInfo";

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
