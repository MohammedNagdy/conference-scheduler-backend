// Create custom validators
const User = require('../Models/User');

// Find if user exists
export const ifUserExists = (fieldName, value) => {
    return User.findUserByEmail(value).then(user => {
      if (user) {
        return Promise.reject(`${fieldName} already exists`);
      }
    });
};
