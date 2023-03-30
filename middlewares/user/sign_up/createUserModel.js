const User = require("../../../model/user/Users");

exports.createUserModel = async (req, res, next) => {
  const role = req.role.id
  const { email, password, userName, fullName } = req.body;
  try {
    const newUser = new User({
      email, password, userName, fullName, role
    })
    req.user = newUser
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
}