const { body, query } = require('express-validator');

exports.createCompanyInputs = [
  body('companyName')
    .isLength({ min: 3, max: 16 })
    .withMessage(
      'Please enter a valid company name that had name between 3 and 16 characters ',
    ),
  body('bio')
    .isLength({ min: 5, max: 100 })
    .withMessage('please gives a description for the bio of your website'),
  body('companyWebSite').isURL().withMessage('please put a valid website'),
];
exports.validationCompanyInputs = [
  query('email').isEmail().withMessage('Please enter a valid email'),
  query('token')
    .isLength({ min: 20 })
    .withMessage('please enter a valid token'),
];

exports.validationJoinCompanyInputs = [
  body('companyId').isString().withMessage('please enter valid company'),
];
