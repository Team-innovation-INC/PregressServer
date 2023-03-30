const User = require("../../../model/user/Users");

const register = async (req, res, next) => {
  try {
    const user = new User(req.user)
    await user.save();
    next();
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).send(`The account is already exist`);      
    }
    return res.status(500).send({ error: error.message });
  }
};

module.exports = register;
