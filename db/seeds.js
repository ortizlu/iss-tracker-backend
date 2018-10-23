const SavedLocation = require('../models/savedLocationModel')
const User = require('../models/userModel')

User.find({}).remove(() => {
  SavedLocation.find({}).remove(() => {
    let nick = User.create({
      username: 'nickintosh',
      password: 'password'
    }).then(user => {
      Promise.all([
        SavedLocation.create({
          title: 'Kiribati',
          location: '3.3704,168.7340',
          author: user._id
        }).then(location => {
          user.savedLocations.push(location)
        })
      ]).then(() => {
        user.save(err => console.log(err))
      })
    })
  })
})
