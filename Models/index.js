// Connect to mongoDB here
const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(process.env.DB)
        .then(() => {
            console.log("Successfully connected to database");
        })
        .catch( (err) => {
            console.error(`Error while connecting to database: ${err}`);
        });
}