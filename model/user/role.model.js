const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const roleSchema = new Schema({
  roleName: {
    type: String,
    required: true,
    enum: ['super-admin', 'admin', 'moderator', 'user'],
    default: 'user',
  },
  last_update: {
    type: Date,
    default: Date.now(),
  },
});

const Role = model('Role', roleSchema);
module.exports = Role;
