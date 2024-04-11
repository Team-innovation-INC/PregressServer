const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema for Users
const GlobalMessageSchema = new Schema({
  company: {
    type: [Schema.Types.ObjectId],
    ref: "Company"
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  messages: {
    type: [Schema.Types.ObjectId],
    ref: "Messages"
  }
});

module.exports = GlobalMessage = mongoose.model( 'GlobalConversation', GlobalMessageSchema);