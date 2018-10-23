const SavedLocation = require('../models/savedLocationModel')
const allLocations = require('./saved-locations.json')
const User = require('../models/userModel')
const allUsers = require('./users.json')

// SavedLocation.remove({})
//   .then(() => {
//     SavedLocation.collection.insert(SavedLocations).then(locations => {
//       console.log(locations)
//       process.exit()
//     })
//   })
//   .catch(err => {
//     console.log(err)
//   })

// User.find({}).remove
