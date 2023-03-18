require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const connectDB = require('./Models');
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

app.listen(process.env.PORT || port, () => {
    console.log("Listening on port: " + process.env.PORT || port);
});



