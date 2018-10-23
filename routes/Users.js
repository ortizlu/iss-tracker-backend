const express = require('express')
const router = express.Router()
const User = require('../models/userModel.js')

//FINDING ALL USERS
router.get('/', (req, res) => {
  User.find()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      console.log(err)
    })
})

//CREATING A NEW USER
router.post('/', (req, res) => {
  User.create(req.body)
    .then(newUser => {
      res.json(newUser)
    })
    .catch(err => {
      console.log(err)
    })
})

//GETTING ONE USER AND DISPLAYING IT
router.get('/:id', (req, res) => {
  User.findOne({ _id: req.params.id })
    .then(foundUser => {
      res.json(foundUser)
    })
    .catch(err => {
      console.log(err)
    })
})

//GETTING ONE USER AND UPDATING IT
router.put('/:id', (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(updatedUser => {
      res.json(updatedUser)
    })
    .catch(err => {
      console.log(err)
    })
})

//GETTING ONE USER AND DELETING IT
router.delete('/:id', (req, res) => {
  User.findOneAndDelete({ _id: req.params.id })
    .then(deletedUser => {
      res.json(deletedUser)
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
