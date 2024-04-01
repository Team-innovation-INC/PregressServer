/**
 * Represents the schema for storing task status information.
 * @typedef {Object} TaskStatus
 * @property {string} current_status - The current status of the task. Required.
 * @property {string} harder - The difficulty level of the task. Required.
 */

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

/**
 * Schema definition for TaskStatus.
 * @type {mongoose.Schema}
 */
const TaskStatusSchema = new Schema({
  /**
   * The current status of the task.
   * @name currentStatus
   * @type {string}
   * @required
   * @enum {string[]} ["draft", "open", "in-progress", "done", "failed", "abandoned"]
   * @default "draft"
   */
  currentStatus: {
    type: String,
    required: true,
    enum: ["draft", "open", "in-progress", "done", "failed", "abandoned"],
    default: "draft"
  },
  /**
   * The difficulty level of the task.
   * @name harder
   * @type {string}
   * @required
   * @enum {string[]} ['very-easy', 'easy', 'middle', 'hard', 'very-hard']
   * @default "not started"
   */
  harder: {
    type: String,
    required: true,
    enum: ['very-easy', 'easy', 'middle', 'hard', 'very-hard'],
    default: "not started"
  },
});

/**
 * Mongoose model for TaskStatus.
 * @type {mongoose.Model<TaskStatus>}
 */
const taskStatus = model('TaskStatus', TaskStatusSchema);

module.exports = taskStatus;
