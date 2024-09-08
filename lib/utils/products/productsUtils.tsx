import ProductsModel from "@/lib/models/productsModel";
import connectMongo from "../db/connectMongo";
import { notFound } from "next/navigation";

export const getProducts = async () => {
  await connectMongo();
  const products: Product[] = await ProductsModel.find();
  if (products.length === 0) return notFound();
  return products;
};

// new products to first places and sort the rest by id
export const getProductsByCategory = async (category: string) => {
  await connectMongo();

  const products: Product[] = await ProductsModel.find({
    category: `${category}`,
  });
  if (products.length === 0) return notFound();

  products.sort((a, b) => {
    if (a.isNewProduct !== b.isNewProduct) {
      return a.isNewProduct ? -1 : 1;
    }
    return b.id - a.id;
  });

  return products;
};

export const getProduct = async (filterBy: string, filterValue: string) => {
  await connectMongo();
  const product: Product | null = await ProductsModel.findOne({
    [filterBy]: filterValue,
  });
  if (!product) return notFound();
  return product as Product;
};

export const isCorrectCategory = async (
  productSlug: string,
  categorySlug: string,
) => {
  await connectMongo();
  const product: Product = await getProduct("slug", productSlug);
  if (product.category !== categorySlug) notFound();
  return product;
};

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});
