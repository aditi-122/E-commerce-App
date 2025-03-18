const express = require('express');
const connectTODb = require('./config/mongo.config');
const UserRoute = require("./routes/user.routes");
const productRoute = require("./routes/product.route");
const OrderRoute = require("./routes/order.route");
const paymentRoute = require("./routes/payment.route");
const app = express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("this is test route");
})
app.use('/users',UserRoute);
app.use("/products",productRoute);
app.use("/order",OrderRoute);
app.use("/payment",paymentRoute);
app.listen(PORT),(req,res)=>{
   connectTODb();
   console.log("server is running on port 5000");
}

