const { header } = require('express-validator');
const { body, param } = require('express-validator');

exports.authorizationHeaderValidator = [
  header('Authorization')
    .notEmpty()
    .withMessage('Authorization.failed')
    .bail()
    .custom(value => {
      if (!value.startsWith('Bearer ')) {
        throw new Error('Authorization.type.failed');
      }
      return true;
    })
    .bail(),
];

exports.userInfoInputs = [
  body('info.bio').optional().isString().withMessage('Bio must be a string'),

  body('info.age')
    .isInt({ min: 16, max: 60 })
    .withMessage('Age must be between 16 and 60'),

  body('info.gender')
    .optional()
    .isBoolean()
    .withMessage('Gender must be true or false'),

  body('info.pic').optional().isString().withMessage('Pic must be a string'),

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
    .isLength({ min: 6 })
    .withMessage('full name must be at least 6 characters long'),
];

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
];

exports.checkUserNameInputs = [
  param('userName')
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters long'),
];

exports.userInformationInputs = [
  // Username should be at least 3 characters long
  body('userName')
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters long'),
  
  // Full name should contain at least two words with each word at least 3 characters
  body('fullName')
    .matches(/^(\w{3,}\s+)+\w{3,}$/)
    .withMessage('Full name must contain at least two words, each at least 3 characters long'),

  // Gender should be a boolean
  body('gender')
    .isBoolean()
    .withMessage('Gender must be a boolean value'),
  
  // Age must be between 16 and 60
  body('age')
    .isInt({ min: 16, max: 60 })
    .withMessage('Age must be between 16 and 60'),

  // Bio should be between 25 and 150 characters
  body('bio')
    .isLength({ min: 25, max: 150 })
    .withMessage('Bio must be between 25 and 150 characters'),

  // Picture must be a valid URL starting with the Firebase Storage base URL
  body('pic')
    .isURL()
    .withMessage('Picture must be a valid URL')
    .matches(/^https:\/\/firebasestorage\.googleapis\.com\/v0\/b\/progess-e18eb.appspot.com/)
    .withMessage('Picture URL must start with "https://firebasestorage.googleapis.com/v0/b/progess-e18eb.appspot.com"'),
];