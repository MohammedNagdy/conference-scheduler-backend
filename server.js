require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const connectDB = require('./Models');
const router = require('./Routes');
const app = express();

const port = 3000;

// Connect to database
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())


app.get("/", (req, res, next ) => {
    res.send("Hello World!");
});
app.get("/preview", (req, res, next ) => {
    res.send("Another route being tested!");
});


// Register routes
router.routes(app);

app.listen(process.env.PORT || port, () => {
    console.log("Listening on port: " + process.env.PORT || port);
});



