const user = require('../../Controllers/User');
const AUTH_URL = 'auth/';

exports.routes = (app) => {
    app.get(`${AUTH_URL}login`, user.login)
}