  /*
 /  ---- create new user middleware
/*/

// ----- import model
const User = require("../../../model/user/Users.model");

exports.register = async (req, res, next) => {
// ----- get using information from request
  const {contact, role, password} =  req.tokenUser

  try {
// ----- create new model
    const user = new User({contact, role, password})
// ----- save new model
    await user.save()
// ----- pass to next middleware
    next();
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).send({ message: `The account is already exist` });
    }
    return res.status(500).send('Internal server error');
  }
};