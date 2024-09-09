import { SITE_URL } from "@/lib/constants";
import { capitalizeFirstLetter } from "@/lib/utils/text/textUtils";

export default function categoryMetaData(categorySlug: string) {
  const capitalizedCategory = capitalizeFirstLetter(categorySlug);

  return {
    title: `${capitalizedCategory}`,
    description: `Explore our range of ${capitalizedCategory} products. Discover high-quality audio solutions in this category.`,
    openGraph: {
      title: `SoundGear: ${capitalizedCategory}`,
      description: `Check out our ${capitalizedCategory} products at SoundGear.`,
      url: SITE_URL + `/${categorySlug}`,
    },
  };
}
