const mongoose = require('mongoose');
const {Schema, model} = mongoose
// ----- Create Schema for Company
const CompanySchema = new mongoose.Schema({
  companyInfo: {
    type:  Schema.Types.ObjectId,
    ref: "CompanyInfo"
  },
  verify : {
    type : Boolean,
    required: true,
    default : false
  },
  companyMembers: {
    type:  Schema.Types.ObjectId,
    ref: "CompanyMembers"
  }
});

const Company = model('Company', CompanySchema);
module.exports = Company;