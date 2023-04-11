const mongoose = require('mongoose');
const {Schema, model} = mongoose

// ----- Create Schema for NotificationSchema
const NotificationSchema = new mongoose.Schema({
  itemInfo: {
    type:  Schema.Types.ObjectId,
    ref: "NotificationSchemaInfo"
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: 'refModel'
  },
  refModel: {
    type: String,
    required: true,
    enum: ['Message', 'Email', 'Task', 'Other']
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Notification = model('Notification', NotificationSchema);
module.exports = Notification;