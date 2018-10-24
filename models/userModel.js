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

User.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', User)
