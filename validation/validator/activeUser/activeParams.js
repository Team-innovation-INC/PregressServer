const { header } = require("express-validator");

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