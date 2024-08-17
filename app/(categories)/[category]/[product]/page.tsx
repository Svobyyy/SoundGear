import ProductsModel from "@/lib/models/ProductsModel";
import connectMongo from "@/lib/utils/connect-mongo";

type props = {
  params: {
    product: any;
    productInfo: any;
  };
};

export default function Category({ params: { product, productInfo } }: props) {
  console.log(product, productInfo);

  return (
    <>
      <main className="min-h-[50vh] bg-blue-400" />
    </>
  );
}

async function getProducts() {
  await connectMongo();
  const products = await ProductsModel.find({});

  return products;
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    productInfo: product.slug,
  }));
}
