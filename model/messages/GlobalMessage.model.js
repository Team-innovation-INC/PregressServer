const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create Schema for Users
const GlobalMessageSchema = new Schema({
  company: {
    type: [Schema.Types.ObjectId],
    ref: 'Company',
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  messages: {
    type: [Schema.Types.ObjectId],
    ref: 'Messages',
  },
});

const GlobalMessage = mongoose.model('GlobalConversation', GlobalMessageSchema);

module.exports = GlobalMessage;
