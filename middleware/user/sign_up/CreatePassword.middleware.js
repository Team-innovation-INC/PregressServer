/*
 /  ----  create new password middleware
/ */

// ----- import model
const Password = require('../../../model/user/password.model');

exports.createPassword = async (req, res, next) => {
  // ----- get using information from request
  const { password } = req.body;

  // ----- create new model
  const NewPassword = new Password({ password });
  // ----- save new model
  await NewPassword.save();
  // ----- add new model to the request
  req.password = NewPassword;
  // ----- pass to next middleware
  next();
};
