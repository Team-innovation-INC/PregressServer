  /*
 /  ----  sign up exist user middleware
/*/

// ----- import model

const UserContact = require("../../../model/user/userContacts.model")
const Token = require("../../../model/Utility/Token.model")

exports.existUser = async (req, res, next) => {
// ----- get using information from request
  const email = req.body.email.toLowerCase()

  try {
// ----- find user status
  const userToken = await Token.findOne({email})
  const user      = await UserContact.findOne({email})
// ----- logic for existing user
  if (user) {
    return res.status(400).send({message: "userAlready exist please try to log in"})
  }

  if (userToken) {
    return res.status(400).send({message: "we sent you a validation email please check your email"})
  }
// ----- pass to next middleware
  next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
}