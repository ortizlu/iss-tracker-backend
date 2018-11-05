const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/getiss', (req, res) => {
    axios
      .get('http://api.open-notify.org/iss-now.json')
      .then(response => res.json(response))
  })

module.exports = router