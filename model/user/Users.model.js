const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const jwt = require('jsonwebtoken');

const secretOrPrivateKey = process.env.JWT_SECRET;
const crypt = require('crypto');

// ----- Create Schema for Users
const userSchema = new Schema({
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserAddress',
  },
  blocked: {
    type: Boolean,
    required: true,
    default: false,
  },
  contact: {
    type: Schema.Types.ObjectId,
    ref: 'UserContact',
    required: true,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
  },
  context: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userContext',
  },
  creation_date: {
    type: Date,
    default: Date.now(),
  },
  info: {
    type: Schema.Types.ObjectId,
    ref: 'UserInfo',
  },
  password: {
    type: Schema.Types.ObjectId,
    ref: 'Password',
    required: true,
    unique: true,
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    required: true,
  },
  providers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Provider',
    },
  ],
  help: {
      tutorial: {
        type: Boolean,
        default: false,
      },
      assistance: {
        type: Boolean,
        default: false,
      },
      calendar: {
        type: Boolean,
        default: false,
      },
      profile: {
        type: Boolean,
        default: false,
      },
  }
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id }, secretOrPrivateKey, {
    expiresIn: '10h',
  });
};

userSchema.methods.generatePasswordResetToken = function () {
  const token = crypt.randomBytes(20).toString('hex');
  this.passwordResetToken = crypt
    .createHash('sha256')
    .update(token)
    .digest('hex');
  this.passwordResetExpires = Date.now() + 3600000;
  return token;
};

const User = model('User', userSchema);

module.exports = User;
