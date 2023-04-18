require("dotenv").config()
const mongoose = require("mongoose");

const mongoURI = `mongodb+srv://${process.env.MongoDBUserName}:${process.env.MongoDBPassword}@cluster0.ywnsq.mongodb.net/${process.env.MongoDBdataBase}?retryWrites=true&w=majority`

// connect with mongoDB Atlas 
const connectdb = async () => {
    mongoose.set('strictQuery', false);
    await mongoose.connect(mongoURI);
};

module.exports = connectdb;