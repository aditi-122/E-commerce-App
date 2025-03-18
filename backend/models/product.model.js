const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name:String,
  price:Number,
  description:String
},
{
    timestamps:true,
    UpdatedAt:true,
    createdAt:true
});
ProductModel = mongoose.model("products",ProductSchema);
module.exports = ProductModel;