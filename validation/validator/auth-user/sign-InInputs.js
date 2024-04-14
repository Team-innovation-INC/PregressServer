const { body } = require('express-validator');

exports.signInInputs = [
  body('email').isEmail().withMessage('Please enter a valid email address'),
];
