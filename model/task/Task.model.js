/**
 * Represents the schema for storing task information.
 * @typedef {Object} Task
 * @property {mongoose.Types.ObjectId} details - The details of the task. Required.
 * @property {mongoose.Types.ObjectId} creator - The user ID of the creator of the task. Required.
 * @property {mongoose.Types.ObjectId} assigned - The user ID of the user to whom the task is assigned. Required.
 * @property {mongoose.Types.ObjectId} [Status] - The status of the task.
 * @property {boolean} Read - Indicates whether the task has been read. Required. Defaults to false.
 * @property {mongoose.Types.ObjectId} [integration] - The integration associated with the task.
 */

const mongoose = require('mongoose');

const { Schema, model } = mongoose;

/**
 * Schema definition for Task.
 * @type {mongoose.Schema}
 */
const TaskSchema = new Schema({
  /**
   * The details of the task.
   * @type {mongoose.Types.ObjectId}
   * @ref {string} "TaskInfo"
   * @required
   */
  Details: {
    type: Schema.Types.ObjectId,
    ref: 'TaskInfo',
    required: true,
  },
  /**
   * The user ID of the creator of the task.
   * @type {mongoose.Types.ObjectId}
   * @ref {string} "users"
   * @required
   */
  Creator: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  /**
   * The user ID of the user to whom the task is assigned.
   * @type {mongoose.Types.ObjectId}
   * @ref {string} "users"
   * @required
   */
  Assigned: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  /**
   * The status of the task.
   * @type {mongoose.Types.ObjectId}
   * @ref {string} "TaskStatus"
   */
  Status: {
    type: Schema.Types.ObjectId,
    ref: 'TaskStatus',
  },
  /**
   * Indicates whether the task has been read.
   * @type {boolean}
   * @required
   * @default false
   */
  read: {
    type: Boolean,
    required: true,
    default: false,
  },
  /**
   * The integration associated with the task.
   * @type {mongoose.Types.ObjectId}
   * @ref {string} "TaskIntegration"
   */
  Integration: {
    type: Schema.Types.ObjectId,
    ref: 'TaskIntegration',
  },
});

/**
 * Mongoose model for Task.
 * @type {mongoose.Model<Task>}
 */
const task = model('task', TaskSchema);
module.exports = task;
