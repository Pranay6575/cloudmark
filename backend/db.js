const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017";

const connectMongo =() =>{
     mongoose.connect(mongoURI);
        console.log('MongoDB connected Succeesfully!')
    }

module.exports = connectMongo;