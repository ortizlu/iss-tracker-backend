const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const User = new mongoose.Schema({
  username: String,
  password: String,
  savedLocations: [
    {
      type: Schema.Types.ObjectId,
      ref: 'SavedLocation'
    }
  ]
})

module.exports = mongoose.model('User', User)
