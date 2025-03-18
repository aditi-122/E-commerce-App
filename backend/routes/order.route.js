const express = require('express');
const ProductModel = require('../models/product.model');
const OrderModel = require("../models/order.model");
const jwt = require("jsonwebtoken");
const jwt_key = process.env.jwt_key;
const OrderRoute =express.Router();
OrderRoute.post('/order',async(req,res)=>{
    try {
        const {token,items,totalPrice} = req.body;
        const decoded = jwt.verify(token,process.env.jwt_key);
        const user = decoded.userId;
        const orderItems = await Promise.all(items.map(async(item)=>{
            const product = await ProductModel.findById(item.product);
            return{product,quantity:item.quantity};
        }))
        const order = new OrderModel({
            user,
            items:orderItems,
            totalPrice
        });
        await order.save();
        res.json({msg:"Order Placed Successfully"});
    } catch (error) {
        res.status(500).json({msg:"Internal Server Error"})
    }
});
module.exports = OrderRoute;