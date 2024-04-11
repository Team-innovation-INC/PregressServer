const { body, header } = require('express-validator');

exports.resetInputs = [
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email address'),
]

exports.resetPasswordInputs = [
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  header('referer')
    .matches(/\?token=/)
    .withMessage('unexpected token please check reopen your email'),
]