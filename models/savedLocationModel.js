const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const SavedLocationSchema = new mongoose.Schema({
  title: String,
  location: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model('SavedLocation', SavedLocationSchema)
