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
   console.log("Called Post USER API");
   User.create(newUser)
    .then( user => {
      console.log("User created: ", user);
      res.sendStatus(200);
    }).catch( err => {
      res.send(`Error ${err}`).status(500);
    })
}

exports.preview = (req, res, next ) => {
  console.log("Preview here")
  res.send("Another route being tested!");
};

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