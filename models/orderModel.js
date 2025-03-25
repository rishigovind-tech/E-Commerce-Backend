const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderID: {
    type: String,
    default: () => Date.now(),
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  totalPrice: {
    type: Number,
    require: true,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
