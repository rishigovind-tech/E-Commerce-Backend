const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const authRoutes=require("./routes/authRoutes")
const orderRoutes=require("./routes/orderRoutes")

const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
require("dotenv").config();
app.use(cookieParser());
connectDB();

app.use(productRoutes);
app.use(authRoutes)
app.use(orderRoutes)

app.listen(process.env.PORT, () => {
  console.log("Server running successfully!!!");
});
