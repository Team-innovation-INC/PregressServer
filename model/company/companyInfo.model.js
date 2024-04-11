/**
 * Represents the schema for storing company information.
 * @typedef {Object} CompanyInfo
 * @property {string} companyName - The name of the company. Required and unique.
 * @property {string} companyWebSite - The website of the company. Required and unique. Must match URL format.
 * @property {string} creationDate - The creation date of the company info entry. Defaults to the current date.
 * @property {string} [bio] - A brief description or bio of the company.
 * @property {string} [pic] - The URL of the company's profile picture. Defaults to a placeholder image.
 */

const mongoose = require('mongoose');
const { urlValidationRegex } = require('../../validation/regex/regex');

/**
 * Schema definition for CompanyInfo.
 * @type {mongoose.Schema}
 */
const CompanyInfoSchema = new mongoose.Schema({
  /**
   * The name of the company.
   * @type {string}
   * @required
   * @unique
   */
  companyName: {
    type: String,
    unique: true,
    required: true,
  },
  /**
   * The website of the company.
   * @type {string}
   * @required
   * @unique
   * @validate
   * @validator URLValidation - Validates URL format.
   */
  companyWebSite: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: function(v) {
        return urlValidationRegex.test(v);
      },
      message: '{VALUE} is not a valid website!'
    },
  },
  /**
   * The creation date of the company info entry.
   * @type {string}
   * @default Date.now
   */
  creationDate: {
    type: String,
    default: Date.now,
  },
  /**
   * A brief description or bio of the company.
   * @type {string}
   */
  bio: {
    type: String,
  },
  /**
   * The URL of the company's profile picture.
   * @type {string}
   * @default "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzw8Q6UOf1CL3h4y3EkHM0qCE47S_-AyxAQ&usqp=CAU"
   */
  pic: {
    type: String,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzw8Q6UOf1CL3h4y3EkHM0qCE47S_-AyxAQ&usqp=CAU"
  },
});

/**
 * Mongoose model for CompanyInfo.
 * @type {mongoose.Model<CompanyInfo>}
 */
const CompanyInfo = mongoose.model('CompanyInfo', CompanyInfoSchema);
module.exports = CompanyInfo;
