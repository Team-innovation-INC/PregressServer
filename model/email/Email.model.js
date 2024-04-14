const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema for Users
const EmailSchema = new Schema({
  info: {
    type: Schema.Types.ObjectId,
    ref: 'EmailInfo',
  },
  from: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  to: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  seen: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Number,
    default: Date.now(),
  },
});

const Email = mongoose.model('email', EmailSchema);
module.exports = Email;
