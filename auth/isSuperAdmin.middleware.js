  /*
 /  ---- check super-admin role middleware
/*/

// ----- import model
const Role = require("../../../model/user/role.model")

exports.isSuperAdmin = async(req, res, next) => {
// ----- get using information from request
  const user = req.user
  try {
// ----- find user role from data base
    const role = await Role.findById(user.role)
// ----- forbidden error case
    if (role.roleName !== "super-admin") {
      return res.status(403).send({message: "not authorized"})
    }
// ----- pass to next middleware
    next()
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
}