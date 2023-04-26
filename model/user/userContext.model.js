const mongoose = require('mongoose');
const {Schema, model} = mongoose

const userContextSchema = new Schema({
  followers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  ratings: {
    type: Number,
    min: 0,
    max: 10
  },
  last_update: {
    type: Date,
    default: Date.now(),
  },
});

const userContext = model('UserContext', userContextSchema);
module.exports = userContext