const mongoose = require('mongoose');
const {Schema, model} = mongoose

// ----- Create Schema for tasks 
const TaskSchema = new Schema({
  details: {
    type: Schema.Types.ObjectId,
    ref: "StatusInfos"
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  assigned : {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  Status:{
    type: Schema.Types.ObjectId,
    ref: 'Status'
  },
  Read: {
    type: Boolean,
    required: true,
    default: false
  },
});

const task = model('task', TaskSchema);
module.exports = task;