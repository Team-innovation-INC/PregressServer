require("dotenv").config()
const mongoose = require("mongoose");

const mongoURI = `mongodb+srv://${process.env.MongoDBUserName}:${process.env.MongoDBPassword}@cluster0.ywnsq.mongodb.net/${process.env.MongoDBdataBase}?retryWrites=true&w=majority`

// connect with mongoDB Atlas 
const connectdb = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(mongoURI);
    console.info("db connected successfully");
  } catch (error) {
    if (error.code === "ESERVFAIL") {
    console.error("connection lost")
    } else {
      console.error("something wrong please connect")
    }
  }
};

module.exports = connectdb;