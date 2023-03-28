const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto')

// --- validation regex 
const Regex = require("../../validation/regex/regex")
const {emailValidationRegex, passwordValidationRegex, phoneNumberValidationRegex} = Regex
const secretOrPrivateKey = process.env.JWT_SECRET

// ----- Create Schema for Users 
const userSchema = new mongoose.Schema({
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
  companyName: {
      type: String,
      unique: true,
      required: true,
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
  creationDate: {
      type: String,
      default: Date.now,
  },
  bio:{
      type : String,
  },
  verif : {
    type : Boolean,
    required: true,
    default : false
  },
  pic:{
      type : String,
      default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzw8Q6UOf1CL3h4y3EkHM0qCE47S_-AyxAQ&usqp=CAU"
  },
  admin:{
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, secretOrPrivateKey, {
    expiresIn: '1h',
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

const User = mongoose.model('User', userSchema);

module.exports = User;