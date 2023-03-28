const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  user : {
    type: mongoose.Schema.Types.Mixed,
    required:true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Token = mongoose.model('Token', TokenSchema);

module.exports = Token;
