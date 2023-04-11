const UserContact = require("../../../model/user/userContacts.model")
const Token = require("../../../model/Utility/Token.model")

exports.existUser = async (req, res, next) => {
  const {email} = req.body
  try {
  const userToken = await Token.findOne({email})
  const user = await UserContact.findOne({email})
  if (user) {
    return res.status(200).send({message: "userAlready exist please try to log in"})
  }
  if (userToken) {
    return res.status(200).send({message: "we sent you a validation email please check your email"})
  }
  next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
}