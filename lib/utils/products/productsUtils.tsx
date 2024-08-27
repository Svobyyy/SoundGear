import ProductsModel from "@/lib/models/ProductsModel";
import connectMongo from "../connect-mongo";

export const getProducts = async () => {
  await connectMongo();
  const products = await ProductsModel.find();
  return products;
};

export const getProductsByCategory = async (category: string) => {
  await connectMongo();
  const products = await ProductsModel.find({ category: `${category}` });
  products.sort((a, b) => {
    // New Products
    if (a.new !== b.new) {
      return a.new ? -1 : 1;
    }
    // Sort by id
    return b.id - a.id;
  });
  return products;
};
