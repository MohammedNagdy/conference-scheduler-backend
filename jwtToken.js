const jwt = require('jsonwebtoken');

// Function to generate auth token
const generateJwtToken = (username) => {
    return jwt.sign(username, process.env.secret, { expiresIn: '2800s'});
}

// Function to authenticate users
const authenticateUser = (req, res, next) => {
    const auth = req.headers['authorization'];
    const token = auth && auth.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.secret, (err, user) => {
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    })
}