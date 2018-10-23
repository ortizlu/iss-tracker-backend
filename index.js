const express = require('express')
const parser = require('body-parser')
const app = express()
// const Question = require('./db/models.js')
const cors = require('cors')
const SavedLocations = require('./db/SavedLocations.js')

app.set('port', process.env.PORT || 3001)
app.use(parser.json())
app.use(cors())

//GET ALL LOCATIONS
app.get('/api/locations', (req, res) => {
  SavedLocations.find()
    .then(locations => res.json(locations))
    .catch(err => console.log(err))
})

//POST NEW LOCATION
app.post('/api/locations', (req, res) => {
  SavedLocations.create(req.body)
    .then(location => res.json(location))
    .catch(err => console.log(err))
})

//FIND ONE AND SHOW
app.get('/api/locations/:id', (req, res) => {
  SavedLocations.findById(req.params.id)
    .then(location => {
      res.json(location)
    })
    .catch(err => {
      console.log(err)
    })
})

//FIND ONE AND UPDATE
app.put('/api/locations/:id', (req, res) => {
  SavedLocations.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(updatedLocation => {
      res.json(updatedLocation)
    })
    .catch(err => {
      console.log(err)
    })
})

//FIND ONE AND DELETE
app.delete('/api/locations/:id', (req, res) => {
  SavedLocations.findOneAndDelete({ _id: req.params.id })
    .then(deletedLocation => {
      res.json(deletedLocation)
    })
    .catch(err => {
      console.log(err)
    })
})

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})
