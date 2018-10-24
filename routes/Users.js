const express = require('express')
const router = express.Router()
const jwt = require('jwt-simple')
const passport = require('../config/passport')
const config = require('../config/config')
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

//USER SIGNUP
router.post('/signup', (req, res) => {
  if (req.body.username && req.body.password) {
    let newUser = {
      username: req.body.username,
      password: req.body.password
    }
    User.findOne({ username: req.body.username }).then(user => {
      if (!user) {
        User.create(newUser).then(user => {
          if (user) {
            let payload = {
              id: newUser.id
            }
            let token = jwt.encode(payload, config.jwtSecret)
            res.json({
              token: token
            })
          } else {
            res.sendStatus(401)
          }
        })
      } else {
        res.sendStatus(401)
      }
    })
  } else {
    res.sendStatus(401)
  }
})

//USER LOGIN
router.post('/login', (req, res) => {
  if (req.body.username && req.body.password) {
    User.findOne({ username: req.body.username }).then(user => {
      if (user) {
        if (user.password === req.body.password) {
          var payload = {
            id: user.id
          }
          var token = jwt.encode(payload, config.jwtSecret)
          res.json({
            token: token
          })
        } else {
          res.sendStatus(401)
        }
      } else {
        res.sendStatus(401)
      }
    })
  } else {
    res.sendStatus(401)
  }
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
