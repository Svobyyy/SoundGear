import { SITE_URL } from "@/lib/constants";
import { isCorrectCategory } from "@/lib/utils/products/productsUtils";

export default async function productMetaData(
  productSlug: string,
  categorySlug: string,
) {
  const product = await isCorrectCategory(productSlug, categorySlug);

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `SoundGear: ${product.name}`,
      description: product.description,
      url: SITE_URL + `/${product.category}/${categorySlug}`,
    },
  };
}
