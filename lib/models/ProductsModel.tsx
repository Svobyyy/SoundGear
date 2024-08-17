import { model, models, Schema } from "mongoose";

const imageSchema = new Schema(
  {
    mobile: { type: String, required: true },
    tablet: { type: String, required: true },
    desktop: { type: String, required: true },
  },
  { _id: false },
);

const includeSchema = new Schema(
  {
    quantity: { type: Number, required: true },
    item: { type: String, required: true },
  },
  { _id: false },
);

const gallerySchema = new Schema(
  {
    first: { type: imageSchema, required: true },
    second: { type: imageSchema, required: true },
    third: { type: imageSchema, required: true },
  },
  { _id: false },
);

const otherSchema = new Schema(
  {
    slug: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: imageSchema, required: true },
  },
  { _id: false },
);

const ProductSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  slug: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: imageSchema, required: true },
  category: { type: String, required: true },
  categoryImage: { type: imageSchema, required: true },
  new: { type: Boolean, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  features: { type: String, required: true },
  includes: { type: [includeSchema], required: true },
  gallery: { type: gallerySchema, required: true },
  others: { type: [otherSchema], required: true },
});

const ProductsModel = models.Product || model("Product", ProductSchema);

export default ProductsModel;
