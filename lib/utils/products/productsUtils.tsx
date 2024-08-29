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
    // assign isNew Products to first places
    if (a.new !== b.new) {
      return a.new ? -1 : 1;
    }
    // sort others by id
    return b.id - a.id;
  });
  return products;
};

export const getProduct = async (filterBy: string, filterValue: string) => {
  await connectMongo();
  const product = await ProductsModel.findOne({ [filterBy]: filterValue });
  return product;
};
