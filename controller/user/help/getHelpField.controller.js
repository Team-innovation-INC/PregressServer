/*
 /  ---- update user contact controller ( expected email)
/ */

// ----- import model
const User = require('../../../model/user/Users.model');

const userHelpField = async (req, res, next) => {
  // ----- get using information from request
  const { id } = req;
  const { fieldToUpdate } = req.params;

  const user = await User.findById(id);
  // ----- response update contact success
    req.status = 200;
    req.data = {field: user.help[fieldToUpdate]}
    next();
};

module.exports = userHelpField;
