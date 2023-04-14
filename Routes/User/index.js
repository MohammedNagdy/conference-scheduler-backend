const express = require('express');
const router = express.Router();
const user = require('../../Controllers/User');

// TODO: Add validators in the middleware
// TODO: Abstract main router for all routes
router.post(`/login`, user.login);
router.post(`/signup`, user.signupValidators ,user.signup);
router.get(`/preview`, user.preview);

module.exports = router
