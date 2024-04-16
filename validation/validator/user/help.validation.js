const { param, body } = require('express-validator');

exports.userHelpInfoInputs = [
    param('fieldToUpdate')
    .isString().withMessage('Field must be a string')
    .custom((value) => {
      // Allowed fields in the help object schema
      const allowedFields = ['tutorial', 'assistance', 'calendar', 'profile'];

      // Check if the provided field is one of the allowed fields
      if (!allowedFields.includes(value)) {
        throw new Error('Invalid field to update');
      }
      return true;
    }),
];

exports.userHelpUpateInfoInputs = [
    body('fieldToUpdate')
    .isString().withMessage('Field must be a string')
    .custom((value) => {
      // Allowed fields in the help object schema
      const allowedFields = ['tutorial', 'assistance', 'calendar', 'profile'];

      // Check if the provided field is one of the allowed fields
      if (!allowedFields.includes(value)) {
        throw new Error('Invalid field to update');
      }
      return true;
    }),
];