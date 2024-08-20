import Link from "next/link";
import Twitter from "../icons/Twitter";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Categories from "../Categories";
import BestAudio from "./BestAudio";
import FooterInfo from "./FooterInfo";

type props = {
  categories?: boolean;
  bestaudio?: boolean;
};

export default function Footer({ categories, bestaudio }: props) {
  return (
    <>
      {categories && <Categories />}
      {(bestaudio && <BestAudio />) || (categories && <BestAudio />)}
      <FooterInfo />
    </>
  );
}
