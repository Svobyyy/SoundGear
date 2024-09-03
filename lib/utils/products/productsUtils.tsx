import ProductsModel from "@/lib/models/productsModel";
import connectMongo from "../db/connectMongo";

export const getProducts = async () => {
  await connectMongo();
  const products = await ProductsModel.find();
  return products;
};

// assign isNewProduct Products to first places, sort other products which arent new by id
export const getProductsByCategory = async (category: string) => {
  await connectMongo();
  const products = await ProductsModel.find({ category: `${category}` });

  products.sort((a, b) => {
    if (a.new !== b.new) {
      return a.new ? -1 : 1;
    }
    return b.id - a.id;
  });

  return products;
};

export const getProduct = async (filterBy: string, filterValue: string) => {
  await connectMongo();
  const product = await ProductsModel.findOne({ [filterBy]: filterValue });
  return product;
};

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});
