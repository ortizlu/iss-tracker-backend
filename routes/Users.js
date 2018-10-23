const express = require('express')
const router = express.Router()
const Users = require('../models/userModel.js')

router.get('/', (req, res) => {
  res.send('hello there')
})

module.exports = router
