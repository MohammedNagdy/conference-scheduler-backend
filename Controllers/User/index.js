// Express Validator
const { body, validationResult } = require('express-validator');
const crypto = require('crypto');

const User = require('../../Models/User');


exports.login = (req, res, next) => {
    // Get user from data base
    // TODO: Get and return USER from database
}

exports.signup = (req, res, next) => {
    // Get user from data base
    const newUser = {
      name : req.body.name,
      username : req.body.username,
      email : req.body.email,
      password : crypto.pbkdf2Sync(req.body.password, process.env.salt,  
        1000, 64, `sha512`).toString(`hex`),
    }
   // TODO: Create a user with encrypted password
   User.create(newUser)
    .then( user => {
      res.status(200);
    }).catch( err => {
      res.send(`Error ${err}`).status(500);
    })

}

// Validation
exports.signupValidators = [
    body('email').isEmail(),
    body('email').custom((fieldName, value) => {
        return User.findUserByEmail(value).then(user => {
          if (user) {
            return Promise.reject(`${fieldName} already exists`);
          }
        });
    }),
]