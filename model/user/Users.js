const mongoose = require('mongoose');
const {Schema, model} = mongoose

const jwt = require('jsonwebtoken');
const secretOrPrivateKey = process.env.JWT_SECRET

const bcrypt = require('bcryptjs');
const crypto = require('crypto')

// --- validation regex 
const {passwordValidationRegex} = require("../../validation/regex/regex")

// ----- Create Schema for Users 
const userSchema = new Schema({
  contact:{
    type: Schema.Types.ObjectId,
    ref:'UserContact'
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return passwordValidationRegex.test(value);
      },
      message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long'
    }
  },
  blocked : {
      type : Boolean,
      required: true,
      default : false
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    required: true
  },
  info: {
    type: Schema.Types.ObjectId,
    ref: 'UserInfo'
  },
  creation_date: {
    type: Date,
    default: Date.now(),
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, secretOrPrivateKey, {
    expiresIn: '10h',
  });
  return token;
};

userSchema.methods.generatePasswordResetToken = function() {
  const token = crypto.randomBytes(20).toString('hex');
  this.passwordResetToken = crypto.createHash('sha256').update(token).digest('hex');
  this.passwordResetExpires = Date.now() + 3600000; // 1 hour
  return token;
};

userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});

const User = model('User', userSchema);

module.exports = User;