const mongoose = require('mongoose');

const { Schema, model } = mongoose;
const userInfoSchema = new Schema({
  gender: {
    type: Boolean,
  },
  age: {
    type: Number,
    min: 16,
    max: 60,
  },
  bio: {
    type: String,
    min: 25,
    max: 150,
  },
  pic: {
    type: String,
    default:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzw8Q6UOf1CL3h4y3EkHM0qCE47S_-AyxAQ&usqp=CAU',
  },
  language: {
    type: String,
    enum: ['english', 'french', 'arabic'],
    default: 'english',
  },
  last_update: {
    type: Date,
    default: Date.now(),
  },
});

const userInfo = model('UserInfo', userInfoSchema);
module.exports = userInfo;
