const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

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

User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', User)
