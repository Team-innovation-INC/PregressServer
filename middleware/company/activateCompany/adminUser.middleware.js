/*
 /  ---- user upgrade to admin middleware
/ */

// ----- import model
const UserRole = require('../../../model/user/role.model');

exports.upgradeUserRoleToAdmin = async (req, res, next) => {
  // ----- get using information from request
  const { user } = req;
  try {
    // ----- update user role model
    await UserRole.findByIdAndUpdate(user.role._id.toString(), {
      $set: { roleName: 'admin' },
    });
    // ----- pass to next middleware
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};
