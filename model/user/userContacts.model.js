const mongoose = require('mongoose');
const {Schema, model} = mongoose

const {emailValidationRegex} = require('../../validation/regex/regex');

const userContactSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
      validate: {
      validator: function(v) {
        return emailValidationRegex.test(v);
      },
      message: '{VALUE} is not a valid email!'
      },
    },
  fullName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  last_update: {
    type: Date,
    default: Date.now(),
  },
});

const userContact = model('UserContact', userContactSchema);
module.exports = userContact