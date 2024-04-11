const { header } = require("express-validator");
const { body } = require('express-validator');

exports.authorizationHeaderValidator = [header('Authorization')
  .notEmpty()
  .withMessage('Authorization header is required')
  .bail()
  .custom( value => {
    if (!value.startsWith('Bearer ')) {
      throw new Error('Authorization header must use Bearer scheme');
    }
    return true;
  })
  .bail()]

  exports.userInfoInputs = [
    body('info.bio')
      .optional()
      .isString()
      .withMessage('Bio must be a string'),
  
    body('info.age')
      .isInt({ min: 16, max: 60 })
      .withMessage('Age must be between 16 and 60'),
  
    body('info.gender')
      .optional()
      .isBoolean()
      .withMessage('Gender must be true or false'),
  
    body('info.pic')
      .optional()
      .isString()
      .withMessage('Pic must be a string'),
  
    body('localization.city')
      .optional()
      .isString()
      .withMessage('City must be a string'),
  
    body('localization.country')
      .optional()
      .isString()
      .withMessage('Country must be a string'),

    body('localization.street')
      .optional()
      .isString()
      .withMessage('Street must be a string'),

    body('localization.codeZip')
      .optional()
      .isNumeric()
      .withMessage('Zip code must be a number'),

    body('firstName')
      .optional()
      .isString()
      .withMessage('Last update must be a valid date'),

    body('lastName')
      .optional()
      .isString()
      .withMessage('Last update must be a valid date'),
  ];

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