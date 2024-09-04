import ProductImages from "./ProductImages";
import ProductText from "./ProductText";

type Props = {
  name: string;
  description: string;
  price: number;
  id: number;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  isNewProduct?: boolean;
};

export default function Product({
  name,
  description,
  price,
  isNewProduct,
  id,
  image: { mobile, tablet, desktop },
}: Props) {
  return (
    <section className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:gap-5">
      <ProductImages
        mobile={mobile}
        tablet={tablet}
        desktop={desktop}
        name={name}
      />
      <ProductText
        isNewProduct={isNewProduct}
        description={description}
        name={name}
        price={price}
        id={id}
      />
    </section>
  );
}
