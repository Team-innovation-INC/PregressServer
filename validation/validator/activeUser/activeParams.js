const { header } = require("express-validator");
const { body } = require('express-validator');

exports.authorizationHeaderValidator = [header('Authorization')
  .notEmpty()
  .withMessage('Authorization header is required')
  .bail()
  .custom((value) => {
    if (!value.startsWith('Bearer ')) {
      throw new Error('Authorization header must use Bearer scheme');
    }
    return true;
  })
  .bail()]

exports.userInfoInputs = [
  body('bio')
    .isLength({min: 10, max: 200})
    .withMessage('your bio have to get at least 10 characters and can not pass 200 characters'),
  body('age')
    .isInt({min: 16, max: 60})
    .withMessage('age is between 16 and 60'),
  body('gender')
    .optional()
    .isBoolean()
    .withMessage('gender have to get true or false'),
]

exports.userContactInputs = [
  body('userName')
    .isLength({ min: 3 })
    .withMessage('user name must be at least 3 characters long'),
  body('fullName')
    .isLength({ min: 6})
    .withMessage('full name must be at least 6 characters long')
]

exports.userPasswordInputs = [
  body('currentPassword')
    .isLength({ min: 6 })
    .withMessage('Current password must be at least 6 characters long'),
  body('newPassword')
    .isLength({ min: 6 })
    .withMessage('new password must be at least 6 characters long'),
  body('confirmPassword')
    .isLength({ min: 6 })
    .withMessage('confirm password must be at least 6 characters long'),
]