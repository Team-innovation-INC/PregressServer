const { validationResult } = require('express-validator');

function validateInputs(req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map(error => error.msg);
      return res.status(400).json({ message: errorMessages[0] });
    }
    next();
  } catch (error) {
    console.log(error)
  }

}

module.exports = validateInputs;