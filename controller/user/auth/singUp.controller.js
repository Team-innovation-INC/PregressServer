const User = require("../../../model/user/Users.model");

const register = async (req, res, next) => {
  const {contact, role, password} =  req.tokenUser
  try {
    const user = new User({contact, role, password})
    await user.save()
    next();
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).send(`The account is already exist`);      
    }
    return res.status(500).send({ error: error.message });
  }
};

module.exports = register;