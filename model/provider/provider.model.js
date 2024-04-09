/**
 * Represents the schema for storing provider information.
 * @typedef {Object} Provider
 * @property {string} name - The name of the provider.
 * @property {mongoose.Types.ObjectId} providerId - The ID of the provider in the application.
 * @property {string} [token] - The access token associated with the provider. Optional.
 * @property {mongoose.Types.ObjectId} company - The ID of the company associated with the provider.
 * @property {mongoose.Types.ObjectId} admin - The ID of the admin user associated with the provider. Required and unique.
 */

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

/**
 * @description Array containing types of providers
 * @name providersTypes
 * @return {string[]}
 */
const providersTypes = ['GitHub', 'Jira', 'Mega'];

/**
 * Schema definition for Provider.
 * @type {mongoose.Schema}
 */
const ProviderSchema = new Schema({
  /**
   * The name of the provider.
   * @type {string}
   * @required
   */
  name: {
    type: String,
    required: true
  },
    /**
   * The type of the provider (e.g., GitHub, Jira, Mega).
   * @type {string}
   */
  type: {
    type: String,
    enum: providersTypes
  },
  /**
   * The ID of the provider in the application.
   * @type {mongoose.Types.ObjectId}
   * @required
   */
  providerId: {
    type: String,
    required: true
  },
  /**
   * The access token associated with the provider.
   * @type {string}
   * @required
   * @unique
   */
  token: {
    type: String,
    unique: true

  },
  /**
   * The ID of the company associated with the provider.
   * @type {mongoose.Types.ObjectId}
   */
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
  },
  /**
   * The ID of the admin user associated with the provider.
   * @type {mongoose.Types.ObjectId}
   * @required
   */
  admin: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
});

/**
 * Mongoose model for Provider.
 * @type {mongoose.Model<Provider>}
 */
const Provider = model('Provider', ProviderSchema);
module.exports = Provider;
