const mongoose = require('mongoose');
const {Schema, model} = mongoose

const jwt = require('jsonwebtoken');
const secretOrPrivateKey = process.env.JWT_SECRET
const crypto = require('crypto')

// ----- Create Schema for Users 
const userSchema = new Schema({
  contact:{
    type: Schema.Types.ObjectId,
    ref:'UserContact'
  },
  password: {
    type: Schema.Types.ObjectId,
    ref: 'Password',
    required: true
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


const User = model('User', userSchema);

module.exports = User;