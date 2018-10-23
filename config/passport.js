const passport = require('passport')
const passportJWT
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/userModel')

module.exports = {
  jwtSecret: 'JwtS3cr3tK3Y',
  jwtSession: {
    session: false
  }
}

// module.exports = function(passport) {
//   passport.serializeUser(function(user, callback) {
//     callback(null, user.id)
//   })

//   passport.deserializeUser(function(id, callback) {
//     User.findById(id, function(err, user) {
//       callback(err, user)
//     })
//   })

//   passport.use(
//     'local-signup',
//     new LocalStrategy(
//       {
//         usernameField: 'username',
//         passwordField: 'password',
//         passReqToCallback: true
//       },
//       function(req, username, password, callback) {
//         // check to see if this username is taken
//         User.findOne({ username: username }, function(err, user) {
//           if (err) return callback(err)
//           // if the user is already taken, send them a flash message
//           if (user) {
//             return callback(null, false)
//           }
//           // if the username is not taken, create a new user
//           else {
//             const newUser = new User()
//             newUser.username = username
//             newUser.password = newUser.encrypt(password)

//             newUser.save(function(err) {
//               if (err) throw err
//               return callback(null, newUser)
//             })
//           }
//         })
//       }
//     )
//   )

//   passport.use(
//     'local-login',
//     new LocalStrategy(
//       {
//         usernameField: 'username',
//         passwordField: 'password',
//         passReqToCallback: true
//       },
//       function(req, username, password, callback) {
//         // search for a user with this email
//         User.findOne({ username: username }, function(err, user) {
//           if (err) {
//             return callback(err)
//           }
//           // if the user does not exist in DB, return an error
//           if (!user) {
//             return callback(null, false)
//           }
//           // check password against saved password
//           if (!user.validPassword(password)) {
//             return callback(null, false)
//           }
//           // pass user into callback
//           return callback(null, user)
//         })
//       }
//     )
//   )
// }
