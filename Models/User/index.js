// Create a user model schema
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const User = mongoose.Model('User', UserSchema);

module.exports = User;