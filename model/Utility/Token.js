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

const Token = mongoose.model('Token', TokenSchema);

module.exports = Token;
