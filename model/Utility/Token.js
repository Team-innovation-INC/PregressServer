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
    type: Schema.Types.Mixed,
    required:true
  },
  role: {
    type: Schema.Types.ObjectId,
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

TokenSchema.pre('save', async function (next) {
  const token = this;
  if (!token.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(token.password, salt);
  token.password = hash;
  next();
});

const Token = model('Token', TokenSchema);

module.exports = Token;
