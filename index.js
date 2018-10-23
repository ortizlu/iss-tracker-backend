const express = require('express')
const parser = require('body-parser')
const app = express()
// const Question = require('./db/models.js')
const cors = require('cors')
const savedLocationsRoutes = require('./routes/SavedLocations')
const UsersRoutes = require('./routes/Users')

app.set('port', process.env.PORT || 3001)
app.use(parser.json())
app.use(cors())

app.use('/api/locations', savedLocationsRoutes)
app.use('/api/users', UsersRoutes)

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})
