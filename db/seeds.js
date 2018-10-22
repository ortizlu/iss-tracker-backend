const SavedLocation = require('./models.js')
const SavedLocations = require('./saved-locations.json')

SavedLocation.remove({})
  .then(() => {
    SavedLocation.collection.insert(SavedLocations).then(locations => {
      console.log(locations)
      process.exit()
    })
  })
  .catch(err => {
    console.log(err)
  })
