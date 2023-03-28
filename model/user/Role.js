const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ["super-admin", "admin", "moderator", "user"],
    default: "user"
  },
});

const Role = mongoose.model('Role', roleSchema);
module.exports = Role