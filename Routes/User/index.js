const user = require('../../Controllers/User');
const AUTH_URL = '/auth';

// TODO: Add validators in the middleware
// TODO: Abstract main router for all routes
exports.routes = (app) => {
    app.post(`${AUTH_URL}/login`, user.login);
    app.post(`${AUTH_URL}/signup`, user.signup);
}