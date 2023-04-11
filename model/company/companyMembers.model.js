const mongoose = require('mongoose');
const {Schema, model} = mongoose
const CompanyMembersSchema = new Schema({
  admin:{
    type: Schema.Types.ObjectId,
    ref: 'users',
    unique: true
  },
    users :{
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'users',
    unique: true,
  }
});

const CompanyMembers = model('CompanyMembers', CompanyMembersSchema);
module.exports = CompanyMembers