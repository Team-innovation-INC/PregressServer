const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const {Schema, model} = mongoose

const TokenSchema = new Schema({
  token: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  contact : {
    type: Schema.Types.ObjectId
  },
  role: {
    type: Schema.Types.ObjectId
  },
  password: {
    type: Schema.Types.ObjectId
  },
  type : {
    type: String,
    required: true,
    enum: ["reset-password", "forget-password", "reset-email", "deactivate-account", "activate-account"],
    default: "activate-account"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Token = model('Token', TokenSchema);

module.exports = Token;
