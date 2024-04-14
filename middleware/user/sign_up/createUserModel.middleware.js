/*
 /  ---- create new user middleware
/ */

// ----- import model
const User = require('../../../model/user/Users.model');

exports.createUserModel = async (req, res, next) => {
  // ----- get using information from request
  const role = req.role.id;
  const contact = req.contact.id;
  const password = req.password.id;

  try {
    // ----- create new model
    const newUser = new User({ password, role, contact });
    // ----- add new model to the request
    req.user = newUser;
    // ----- pass to next middleware
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};
