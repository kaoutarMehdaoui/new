const mongoose = require('mongoose');
const config=require('../config');

const start = () => {
    mongoose.connect(`mongodb://localhost:${config.database_port}/${config.database_name}`, {
        useNewUrlParser: "true",
    });

    mongoose.connection.on("error", err => {
        console.log("err", err)
    });

    mongoose.connection.on("connected", (err, res) => {
        console.log("mongoose is connected")
    });
};

module.exports = { start };
