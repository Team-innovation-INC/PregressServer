require("dotenv").config()
const mongoose = require("mongoose");

mongoURI = `mongodb+srv://${process.env.MongoDBUserName}:${process.env.MongoDBPassword}@cluster0.ywnsq.mongodb.net/${process.env.MongoDBdataBase}?retryWrites=true&w=majority`

// conect with mongoDB Atlass 
const connectdb = async () => {
    try {
      mongoose.set('strictQuery', false);
      await mongoose.connect(mongoURI);
      console.log("db connected succesfully");
    } catch (error) {
        throw new Error(`${error.codeName}`)
    }
  }; 
 
module.exports = connectdb;