const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema({
  userID:{type:mongoose.Schema.Types.ObjectId,ref:'users'},
  productID:{type:mongoose.Schema.Types.ObjectId,ref:'products'},
  quantity:Number,
  price:Number,
  totalprice:{type:Number,totalprice:(quantity*price)}
  
},
{
    timestamps:true,
    UpdatedAt:true,
    createdAt:true
});
OrderModel = mongoose.model("users",OrderSchemaSchema);
module.exports = OrderModel;