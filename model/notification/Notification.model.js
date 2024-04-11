const mongoose = require('mongoose');
const {Schema, model} = mongoose

// ----- Create Schema for NotificationSchema
const NotificationSchema = new mongoose.Schema({
  itemInfo: {
    type:  Schema.Types.ObjectId,
    ref: "NotificationInfo"
  },
  refModel: {
    type: String,
    required: true,
    enum: ['Company','Message', 'Email', 'Task', 'Other']
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
});

const Notification = model('Notification', NotificationSchema);
module.exports = Notification;