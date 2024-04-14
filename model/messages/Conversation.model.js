const mongoose = require('mongoose');

const messageGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  ],
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message',
    },
  ],
  date: {
    type: Date,
    default: Date.now(),
  },
});

const MessageGroup = mongoose.model('SingleConversation', messageGroupSchema);

module.exports = MessageGroup;
