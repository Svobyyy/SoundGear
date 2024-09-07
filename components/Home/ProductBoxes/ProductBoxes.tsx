import {
  primaryHomeBox,
  quaternaryHomeBox,
  secondaryHomeBox,
  tertiaryHomeBox,
} from "@/lib/constants";
import ProductBox from "./ProductBox";

export default function ProductBoxes() {
  return (
    <section className="max mt-[120px] sm:mt-[96px] lg:mt-[170px]">
      <ProductBox info={primaryHomeBox} />

      <div className="my-6 sm:my-8 lg:my-12">
        <ProductBox info={secondaryHomeBox} />
      </div>

      <div className="flex h-full min-h-[424px] flex-col gap-3 tab:min-h-0 tab:flex-row">
        <ProductBox info={tertiaryHomeBox} smallBoxes />
        <ProductBox info={quaternaryHomeBox} smallBoxes />
      </div>
    </section>
  );
}
