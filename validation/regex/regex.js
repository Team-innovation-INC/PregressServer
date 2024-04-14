/**
 * Regular expression for validating passwords.
 * @type {RegExp}
 */
const passwordValidationRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

/**
 * Regular expression for validating email addresses.
 * @type {RegExp}
 */
const emailValidationRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

/**
 * Regular expression for validating phone numbers.
 * @type {RegExp}
 */
const phoneNumberValidationRegex = /\d{3}-\d{3}-\d{4}/;

/**
 * Regular expression for validating URLs.
 * @type {RegExp}
 */
const urlValidationRegex =
  /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

/**
 * Object containing all regex validation patterns.
 * @type {Object}
 */
const regex = {
  urlValidationRegex,
  passwordValidationRegex,
  emailValidationRegex,
  phoneNumberValidationRegex,
};

module.exports = regex;
