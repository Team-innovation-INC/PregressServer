const mongoose = require('mongoose');
const {Schema, model} = mongoose
const EmailInfoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

const EmailInfo = model('EmailInfo', EmailInfoSchema);
module.exports = EmailInfo