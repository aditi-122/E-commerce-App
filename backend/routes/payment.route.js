const express = require("express");
const stripe = require("stripe")("your-stripe-secret-key");
const PaymentRoute = express.Router();
PaymentRoute.post("/payment",async(req,res)=>{
    const{amount}= req.body;
    const payment = await stripe.paymentIntents.create({
        amount,
        currency:'INR',
    });
    res.status(200).json({clientScret:payment.clien_secret});
})
module.exports = PaymentRoute;