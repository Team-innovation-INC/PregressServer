const { body } = require('express-validator');

exports.createCompanyInputs = [
  body('companyName')
    .isString()
    .isLength({min:3, max: 16 })
    .withMessage('Please enter a valid email address'),
  body('bio')
  .isLength({min:5, max: 100 })
  .withMessage("please gives a description for the bio of your website"),
  body('companyWebSite')
  .isBtcAddress()
] 