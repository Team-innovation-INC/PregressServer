  /*
 /  ---- check email exist middleware
/*/

// ----- import models
const UserContact  = require("../../../model/user/userContacts.model");
const User         = require("../../../model/user/Users.model"       );

exports.checkEmail = async (req, res, next) => {
// ----- get using information from request
  const {email} = req.body
  try {
// ----- find user contact exist
    const contact = await UserContact.findOne({ email });
// ----- case user contact don't exist return response to create a new account
    if (!contact) {
      return res.status(400).json({ message: 'your account is not exist please try to sign up' });
    }
// ----- find user exist
    const user = await User.findOne({ contact : contact.id }).populate(['password', 'contact', 'role'])
// ----- case user don't exist return response to activate user account
    if (!user) {
      return res.status(400).json({ message: 'your account is not activate please check your email' });
    }
// ----- add user information to the request
    req.user = user
// ----- pass to next middleware
    next();
  } catch (error) {
    console.log('error', error)
    return res.status(500).send('Internal server error');
  }
};