const user = require('./User')
const apiPrefix = '/api';

exports.routes = (app) => {
    app.use(`${apiPrefix}/auth`, user)
};
