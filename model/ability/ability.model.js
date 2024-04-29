const mongoose = require('mongoose');

const { Schema, model } = mongoose;

/**
 * Schema definition for an Ability.
 *
 * Represents an ability that applies to a specific entity and operation.
 *
 * @typedef {Object} AbilitySchema
 * @property {String} name - The name of the ability. Must be unique.
 * @property {String} description - A description of the ability.
 * @property {String} entity - The entity (collection) this ability refers to.
 * @property {String} operation - The operation this ability allows (create, read, update, delete, etc.).
 * @property {String[]} role - An array of roles that are allowed to use this ability.
 * @property {Date} last_update - The last time this ability was updated.
 */

/**
 * Mongoose Schema for the Ability.
 * Defines the structure of an ability with its name, description, entity, and operation.
 */
const abilitySchema = new Schema({
  /**
   * The name of the ability.
   *
   * It must be unique and is required.
   */
  name: {
    type: String,
    required: true,
    unique: true,
    min: 5,
  },

  /**
   * A brief description of what this ability does.
   *
   * This is optional and defaults to an empty string.
   */
  description: {
    type: String,
    required: true,
    min: 15,
    max: 100,
  },

  /**
   * The entity (or collection) to which this ability applies.
   *
   * This field is required and has an enum constraint to ensure only specific entities are allowed.
   */
  entity: {
    type: String,
    required: true,
    enum: ['user', 'company', 'task', 'email', 'messages', 'ability'],
  },

  /**
   * The specific operation that this ability represents.
   *
   * This field is required and has an enum constraint.
   */
  operation: {
    type: String,
    required: true,
    enum: ['create', 'read', 'update', 'delete', "manage", 'all'],
  },

  /**
   * The role(s) that are allowed to use this ability.
   *
   * This field is now an array of strings with an enum constraint to ensure only specific roles are allowed.
   */
  role: {
    type: [String],
    required: true,
    enum: ['super-admin', 'admin', 'moderator', 'user'],
  },

  /**
   * The company id related to this ability.
   */
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
      required: true,
    },
  
  /**
   * The last time this ability was updated.
   *
   * It defaults to the current date and time.
   */
  last_update: {
    type: Date,
    default: Date.now,
  },
});

/**
 * Mongoose model for the Ability.
 */
const Ability = model('Ability', abilitySchema);

module.exports = Ability;
