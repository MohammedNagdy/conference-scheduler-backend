// Express Validator
const { body, validationResult } = require('express-validator');

const User = require('../../Models/User');
const ifUserExists = require('../../utils/custom-validators');


exports.login = (req, res, next) => {
    // Get user from data base
    // TODO: Get and return USER from database
}

exports.signup = (req, res, next) => {
    // Get user from data base
    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
   // TODO: Create a user with encrypted password
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