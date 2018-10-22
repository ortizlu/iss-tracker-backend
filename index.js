const express = require('express')
const parser = require('body-parser')
const app = express()
// const Question = require('./db/models.js')
const cors = require('cors')

app.set('port', process.env.PORT || 3001)
app.use(parser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})
