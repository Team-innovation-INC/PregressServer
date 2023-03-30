const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
  current_status: {
    type: String,
    required: true,
    enum: ["super-admin", "admin", "moderator", "user"],
    default: "user"
  },
  harder: {
    type: String,
    required: true,
    enum: ['very-easy', 'easy', 'middle', 'hard', 'very-hard'],
    default: "not started"
  },
});

const Status = mongoose.model('Status', statusSchema);
module.exports = Status