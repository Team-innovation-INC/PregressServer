const mongoose = require('mongoose');

const statusInfoSchema = new mongoose.Schema({
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

const StatusInfo = mongoose.model('StatusInfo', statusInfoSchema);
module.exports = StatusInfo