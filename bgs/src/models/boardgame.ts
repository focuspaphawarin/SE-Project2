import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    boardgame_name: String,
    description: String,
    price: Number,
    number_of_players: String,
    splay_time: String,
    span_of_age: String,
    boardgame_type: String,
    inventory_stocks: Number,
    imageUrl: String,
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Products || mongoose.model("Products", ProductSchema);

export default Product;