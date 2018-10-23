const express = require('express')
const router = express.Router()
const SavedLocations = require('../models/savedLocationModel')

//GET ALL LOCATIONS
// router.get('/', (req, res) => {
//   SavedLocations.find()
//     .then(locations => res.json(locations))
//     .catch(err => console.log(err))
// })

//POST NEW LOCATION
router.post('/', (req, res) => {
  SavedLocations.create(req.body)
    .then(location => res.json(location))
    .catch(err => console.log(err))
})

//FIND ONE AND SHOW
router.get('/:id', (req, res) => {
  SavedLocations.findOne({ _id: req.params.id })
    .then(location => {
      res.json(location)
    })
    .catch(err => {
      console.log(err)
    })
})

//FIND ONE AND UPDATE
router.put('/:id', (req, res) => {
  SavedLocations.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(updatedLocation => {
      res.json(updatedLocation)
    })
    .catch(err => {
      console.log(err)
    })
})

//FIND ONE AND DELETE
router.delete('/:id', (req, res) => {
  SavedLocations.findOneAndDelete({ _id: req.params.id })
    .then(deletedLocation => {
      res.json(deletedLocation)
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
