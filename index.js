const express = require('express')
const parser = require('body-parser')
const app = express()
// const Question = require('./db/models.js')
const cors = require('cors')
const session = require('express-session')
const savedLocationsRoutes = require('./routes/SavedLocations')
const UsersRoutes = require('./routes/Users')
const passport = require('./config/passport')

app.set('port', process.env.PORT || 3001)
app.use(parser.json())
app.use(cors())

//SECRET SESSION PASSWORD!
app.use(session({ secret: 'SECRET-PASSWORD-SECRET' }))

//PASSPORT STUFF
require('./config/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use(function(req, res, next) {
  res.locals.currentUser = req.user
  next()
})

app.use('/api/locations', savedLocationsRoutes)
app.use('/api/users', UsersRoutes)

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})
