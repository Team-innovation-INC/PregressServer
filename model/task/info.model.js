const mongoose = require('mongoose');
const {Schema, model} = mongoose
const statusInfoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  Details:{
    type : String,
    max:200
  },
  Links : {
    type : [String],
  },
  image_urls:{
    type : [String],
  },
});

const StatusInfo = model('StatusInfo', statusInfoSchema);
module.exports = StatusInfo