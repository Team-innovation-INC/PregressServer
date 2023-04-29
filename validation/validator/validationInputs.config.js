const { validationResult } = require('express-validator');

function validateInputs(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);
    return res.status(400).json({ message: errorMessages[0] });
  }
  next();
}

module.exports = validateInputs;