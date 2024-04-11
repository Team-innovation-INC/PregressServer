  /*
 /  ----  create new role middleware
/*/

// ----- import model
const Role = require("../../../model/user/role.model");

exports.createRole = async (req, res, next) => {
  try {
// ----- create new model
    const role = new Role({})
// ----- save new model
    await role.save()
// ----- add new model to the request
    req.role = role
// ----- pass to next middleware
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};