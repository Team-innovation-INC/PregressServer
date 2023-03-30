const { body } = require('express-validator');

exports.signUpInputs = [
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email address'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  body('userName')
    .isLength({ min: 3 })
    .withMessage('user name must be at least 3 characters long'),
  body('fullName')
  .isLength({ min: 6})
  .withMessage('full name must be at least 6 characters long')
]