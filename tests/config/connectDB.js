const mongoose = require("mongoose")
require("dotenv").config()

const mongoURI = `mongodb+srv://${process.env.MongoDBUserName}:${process.env.MongoDBPassword}@cluster0.ywnsq.mongodb.net/${process.env.MongoDBdataBase}?retryWrites=true&w=majority`

module.exports = {
  mongoose,
  connect: () => {
    mongoose.set('strictQuery', false);
    mongoose.Promise = Promise;
    mongoose.connect(mongoURI);
  },
  disconnect: done => {
    mongoose.disconnect(done);
  }
};