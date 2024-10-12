import { model, models, Schema } from "mongoose";
import { Payment } from "../types/formTypes";

const cartSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { _id: false },
);

const phoneRegex = /^\+?[1-9]\d{1,14}$/;
const zipCodeRegex = /^[A-Za-z0-9\s\-]{4,10}$/;

const paymentSchema = new Schema(
  {
    emailAddress: {
      type: String,
      required: true,
      match: [/.+@.+\..+/, "Incorrect email"],
    },
    name: {
      type: String,
      required: true,
      minlength: [2, "Name not valid"],
    },
    phoneNumber: {
      type: String,
      required: true,
      match: [phoneRegex, "Phone number not valid"],
    },
    payment: {
      type: String,
      enum: Object.values(Payment),
      required: true,
    },
    address: {
      type: String,
      required: true,
      minlength: [5, "Address is too short"],
    },
    city: {
      type: String,
      required: true,
      minlength: [2, "City is too short"],
    },
    country: {
      type: String,
      required: true,
      minlength: [2, "Country is too short"],
    },
    zipCode: {
      type: String,
      required: true,
      match: [zipCodeRegex, "Wrong zip code"],
    },
  },
  { _id: false },
);

const UserOrderSchema = new Schema({
  cart: {
    type: [cartSchema],
    required: true,
  },
  payment: {
    type: paymentSchema,
    required: true,
  },
});

const OrderModel =
  models.UserOrder || model("UserOrder", UserOrderSchema);

export default OrderModel;