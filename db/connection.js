const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/iss_db')

module.exports = mongoose
