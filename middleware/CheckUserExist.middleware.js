// middleware check user exist 
const User = require("../model/user/Users.model");

exports.checkUserExist = async (req, res, next) => {
  const userName = req.body.userName
  try {
    const exist_user = await User.findOne({userName})
    if (!exist_user) {
      return  res.status(400).send("user don't exist")
    }
    req.userId    = exist_user.id
    req.userEmail = exist_user.email
    next();
  } catch (error) {
    console.error(error);
    return res.status(400).send({ error: error.message });
  }
};