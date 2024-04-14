/*
 /  ----  create new role middleware
/ */

// ----- import model
const Role = require('../../../model/user/role.model');

exports.createRole = async (req, res, next) => {
  // ----- create new model
  const role = new Role({});
  // ----- save new model
  await role.save();
  // ----- add new model to the request
  req.role = role;
  // ----- pass to next middleware
  next();
};
