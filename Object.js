const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Object = new Schema({
  title: String,
  amazon: {
    site: String,
    image: String,
    rating: String,
    price: String,
    offerPrice: String,
  },
  flipkart: {
    site: String,
    image: String,
    rating: String,
    price: String,
    offerPrice: String,
  },
});
module.exports = mongoose.model("Product", Object);
