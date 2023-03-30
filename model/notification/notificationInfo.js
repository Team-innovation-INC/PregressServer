const mongoose = require('mongoose');
const {Schema, model} = mongoose
const NotificationInfoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: {
    type: [String]
  },
  urls: {
    type: [String]
  }
});

const EmailInfo = model('EmailInfo', NotificationInfoSchema);
module.exports = EmailInfo