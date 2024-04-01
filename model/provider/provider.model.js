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
   * @optional
   */
  token: {
    type: String,
    required: false
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
   * @unique
   */
  admin: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
    unique: true
  },
});

/**
 * Mongoose model for Provider.
 * @type {mongoose.Model<Provider>}
 */
const Provider = model('Provider', ProviderSchema);
module.exports = Provider;
