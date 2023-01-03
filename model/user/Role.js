const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema for Users
const RoleSchema = new Schema({
    role: {
        type: String,
        required: true,
        enum: ["admin", "moderator", "user"],
        default: "user"
    }
   
});

module.exports = Role = mongoose.model('roles', RoleSchema);