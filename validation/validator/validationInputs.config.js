const { validationResult } = require('express-validator');
const createResponseObject = require('../../controller/localResponse.funtion');

function validateInputs(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);
    const status = errorMessages[0].includes('Authorization') ? 401 : 400;
    const response = createResponseObject(req, res, undefined, status);
    response.message = errorMessages[0];
    res.status(response.status).send(response);
  } else {
    next();
  }
}

module.exports = validateInputs;
