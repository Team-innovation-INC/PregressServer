/*
 /  ---- extract user ids to request middleware
/ */

exports.userId = async (req, res, next) => {
  // ----- get using information from request
  const { user } = req;
  try {
    // ----- parse ids to request
    req.userContactId = user.contact;
    req.userPasswordId = user.password;
    req.userRoleId = user.role;
    req.userCompanyId = user.company;
    req.userInfoId = user.info;
    req.id = user._id
    // ----- pass to next middleware
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};
