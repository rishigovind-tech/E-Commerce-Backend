const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productID: {
    type: String,
    default: () => Date.now(),
  },
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  Price: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
