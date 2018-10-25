const express = require('express');
const router = express.Router();
const SavedLocations = require('../models/savedLocationModel');
const User = require('../models/userModel.js');
const jwtDecode = require('jwt-decode');

// GET ALL LOCATIONS
router.get('/', (req, res) => {
  SavedLocations.find()
    .then(locations => res.json(locations))
    .catch(err => console.log(err))
})

//POST NEW LOCATION
router.post('/', (req, res) => {
  User.findById(jwtDecode(req.headers.authorization).id).then(founduser => {
    SavedLocations.create(req.body)
      .then(location => {
        res.json(location)
        founduser.savedLocations.push(location)})
      .then(_ => founduser.save(err => console.log(err)))
      .catch(err => console.log(err));
  });
});

//FIND ONE AND SHOW
router.get('/:id', (req, res) => {
  User.findById(jwtDecode(req.headers.authorization).id).then(founduser => {
  SavedLocations.findOne({ _id: req.params.id })
    .then(location => {
      res.json(location);
    })
    .catch(err => {
      console.log(err);
    });
  });
});

//FIND ONE AND UPDATE
router.put('/:id', (req, res) => {
  User.findById(jwtDecode(req.headers.authorization).id).then(founduser => {
  SavedLocations.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(updatedLocation => {
      res.json(updatedLocation);
    })
    .catch(err => {
      console.log(err);
    });
  });
});

//FIND ONE AND DELETE
router.delete('/:id', (req, res) => {
  SavedLocations.findOneAndDelete({ _id: req.params.id })
    .then(deletedLocation => {
      res.json(deletedLocation);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
