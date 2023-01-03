const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// --- validation regex 
const Regex = require("../../validation/regex/regex.models")
const {emailValidationRegex, passwordValidationRegex, phoneNumberValidationRegex} = Regex

// ----- Create Schema for Users
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        validate: {
          validator: function(v) {
            return emailValidationRegex.test(v);
          },
        message: '{VALUE} is not a valid email!'
        }
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
    date: {
        type: String,
        default: Date.now,
    },
    gender : {
        type: Boolean
    },
    age:{
        type : Number,
        min: 16,
        max:60
    },
    bio:{
        type : String,
        maxLength: 30,
    },
    phoneNumber: {
        type: String,
        validate: {
          validator: function(v) {
            return phoneNumberValidationRegex.test(v);
          },
          message: '{VALUE} is not a valid phone number!'
        }
    },
    blocked : {
        type : Boolean,
        required: true,
        default : false
    },
    pic:{
        type : String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzw8Q6UOf1CL3h4y3EkHM0qCE47S_-AyxAQ&usqp=CAU"
    },
    role:{
        type: { type: Schema.Types.ObjectId, ref: 'roles' }
    }
});

module.exports = User = mongoose.model('users', UserSchema);