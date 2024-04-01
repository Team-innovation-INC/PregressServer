/**
 * Represents the schema for storing task integration information.
 * @typedef {Object} TaskIntegration
 * @property {string} provider - The provider of the task integration. Required.
 * @property {string} repository - The repository associated with the task integration. Required.
 */

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

/**
 * Schema definition for TaskIntegration.
 * @type {mongoose.Schema}
 */
const TaskIntegrationSchema = new Schema({
  /**
   * The provider of the task integration.
   * @type {string}
   * @required
   * @enum {string[]} ["gitHub", "bitbucket"]
   * @default "gitHub"
   */
  provider: {
    type: String,
    required: true,
    enum: ["gitHub", "bitbucket"],
    default: "gitHub"
  },
  /**
   * The repository associated with the task integration.
   * @type {string}
   * @required
   */
  repository:  {
    type: String,
    required: true
  },
});

/**
 * Mongoose model for TaskIntegration.
 * @type {mongoose.Model<TaskIntegration>}
 */
const integratingTask = model('TaskIntegration', TaskIntegrationSchema);

module.exports = integratingTask;
