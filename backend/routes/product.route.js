const express = reqiure("express");
const ProductRoute = express.Router();
const ProductModel = require("../models/product.model");
ProductRoute.get("/",async(req,res)=>{
    const product = await ProductModel.find(req.qurey.userId);
    res.json(product);
});
module.exports = ProductRoute;