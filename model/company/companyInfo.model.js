const mongoose = require('mongoose');
const { urlValidationRegex } = require('../../validation/regex/regex');

const CompanyInfoSchema = new mongoose.Schema({
  companyName: {
    type: String,
    unique: true,
    required: true,
  },
  companyWebSite : {
    type : String,
    unique : true,
    required: true,
    validate: {
      validator: function(v) {
        return urlValidationRegex.test(v);
      },
      message: '{VALUE} is not a valid website!'
      },
  },
  creationDate: {
    type: String,
    default: Date.now,
  },
  bio:{
    type : String,
  },
  pic:{
    type : String,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzw8Q6UOf1CL3h4y3EkHM0qCE47S_-AyxAQ&usqp=CAU"
  },
});

const CompanyInfo = mongoose.model('CompanyInfo', CompanyInfoSchema);
module.exports = CompanyInfo