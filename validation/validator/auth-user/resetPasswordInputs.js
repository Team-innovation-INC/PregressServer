const { body } = require('express-validator');

exports.resetInputs = [
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email address'),
]