/**
 * Represents the schema for storing company information.
 * @typedef {Object} Company
 * @property {mongoose.Types.ObjectId} companyInfo - The ID referencing detailed information about the company.
 * @property {boolean} verify - Indicates whether the company is verified. Required. Defaults to false.
 * @property {mongoose.Types.ObjectId} companyMembers - The ID referencing information about the members associated with the company.
 */

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

/**
 * Schema definition for Company.
 * @type {mongoose.Schema}
 */
const CompanySchema = new mongoose.Schema({
  /**
   * The ID referencing detailed information about the company.
   * @type {mongoose.Types.ObjectId}
   * @ref {string} "CompanyInfo"
   */
  companyInfo: {
    type: Schema.Types.ObjectId,
    ref: "CompanyInfo"
  },
  /**
   * Indicates whether the company is verified.
   * @type {boolean}
   * @required
   * @default false
   */
  verify: {
    type: Boolean,
    required: true,
    default: false
  },
  /**
   * The ID referencing information about the members associated with the company.
   * @type {mongoose.Types.ObjectId}
   * @ref {string} "CompanyMembers"
   */
  companyMembers: {
    type: Schema.Types.ObjectId,
    ref: "CompanyMembers"
  },
  /**
   * Array of objects containing provider name and ID.
   * @type {Object[]}
   * @description An array of objects representing providers associated with the company.
   * Each object contains the name and ID of a provider.
   * - `name`: The name of the provider (e.g., "GitHub"). Required.
   * - `id`: The ID referencing the provider model. Required. References the "Providers" schema.
   */
  provider: [{
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
   * The ID referencing the provider model.
   * @type {mongoose.Types.ObjectId}
   * @ref {string} "Providers"
   * @required
   */
  id: {
    type: Schema.Types.ObjectId,
    ref: "Providers",
    required: true
  }
}]

});

/**
 * Mongoose model for Company.
 * @type {mongoose.Model<Company>}
 */
const Company = model('Company', CompanySchema);
module.exports = Company;
