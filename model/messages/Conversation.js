const mongoose = require('mongoose');

const messageGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],
  messages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message'
  }]
});

const MessageGroup = mongoose.model('Message_Group', messageGroupSchema);

module.exports = MessageGroup;
