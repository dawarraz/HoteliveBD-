const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: String,
  location: String,
  price: Number,
  image: String,
});

module.exports = mongoose.model('Hotel', hotelSchema);