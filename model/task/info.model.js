const mongoose = require('mongoose');
const { Schema, model } = mongoose;

/**
 * Represents the schema for storing task information.
 * @typedef {Object} TaskInfo
 * @property {string} title - The title of the task. Required.
 * @property {string} [description] - Optional description of the task.
 * @property {string[]} [Links] - Optional array of related links.
 * @property {string} label - The label for the task. Required. Defaults to "not started".
 * @property {string[]} [image_urls] - Optional array of image URLs related to the task.
 */

/**
 * Schema definition for TaskInfo.
 * @type {mongoose.Schema}
 */
const TaskInfoSchema = new Schema({
  /**
   * The title of the task.
   * @type {string}
   * @required
   */
  title: {
    type: String,
    required: true
  },
  /**
   * Optional description of the task.
   * @type {string}
   * @maxlength 200
   */
  description: {
    type: String,
    maxlength: 200
  },
  /**
   * Optional array of related links.
   * @type {string[]}
   */
  Links: {
    type: [String],
  },
  /**
   * The label for the task.
   * @type {string}
   * @enum {string[]} - ['bug', 'enhancement', 'question', 'duplicate', 'invalid', 'wontfix']
   * @default "not started"
   */
  label: {
    type: String,
    required: true,
    enum: [
      'bug',
      'enhancement',
      'question',
      'duplicate',
      'invalid',
      'wontfix'
    ],
    default: "not started"
  },
  /**
   * Optional array of image URLs related to the task.
   * @type {string[]}
   */
  imageUrls: {
    type: [String],
  },
});

/**
 * Mongoose model for TaskInfo.
 * @type {mongoose.Model<TaskInfo>}
 */
const taskInfo = model('TaskInfo', TaskInfoSchema);

module.exports = taskInfo;
