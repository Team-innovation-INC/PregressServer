const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema for Users
const EmailSchema = new Schema({
    title: {
        type: String,
        default: 'message from Progress',
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    from: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    },
    body: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: Date.now,
    },
});

module.exports = Email = mongoose.model('email', EmailSchema);