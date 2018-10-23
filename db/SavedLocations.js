const mongoose = require('./connection.js')

const SavedLocationSchema = new mongoose.Schema({
  title: String,
  location: String
})

module.exports = mongoose.model('SavedLocation', SavedLocationSchema)
