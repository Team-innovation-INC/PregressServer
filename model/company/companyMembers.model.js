/**
 * Represents the schema for storing company members information.
 * @typedef {Object} CompanyMembers
 * @property {mongoose.Types.ObjectId} admin - The user ID of the admin of the company. Required and unique.
 * @property {mongoose.Types.ObjectId[]} users - An array of user IDs representing members of the company.
 */

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

/**
 * Schema definition for CompanyMembers.
 * @type {mongoose.Schema}
 */
const CompanyMembersSchema = new Schema({
  /**
   * The user ID of the admin of the company.
   * @type {mongoose.Types.ObjectId}
   * @ref {string} "users"
   * @required
   * @unique
   */
  admin: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true,
    unique: true
  },
  /**
   * An array of user IDs representing members of the company.
   * @type {mongoose.Types.ObjectId[]}
   * @ref {string} "users"
   * @unique
   */
  users: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'users',
    unique: true,
  }
});

/**
 * Mongoose model for CompanyMembers.
 * @type {mongoose.Model<CompanyMembers>}
 */
const CompanyMembers = model('CompanyMembers', CompanyMembersSchema);
module.exports = CompanyMembers;
