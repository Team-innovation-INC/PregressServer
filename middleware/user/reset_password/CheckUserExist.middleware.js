/*
 /  ---- check user exist middleware
/ */

// ----- import model
const UserContact = require('../../../model/user/userContacts.model');

exports.checkUserExist = async (req, res, next) => {
  // ----- get using information from request
  const { email } = req.body;

  try {
    // ----- find user contact exist
    const existUser = await UserContact.findOne({ email });
    // ----- case user contact don't exist return response to create a new account
    if (!existUser) {
      return res.status(400).send({ message: "user don't exist" });
    }
    // ----- add user information to the request
    req.userId = existUser.id;
    // ----- add email type
    req.type = 'reset-password';
    // ----- pass to next middleware
    req.userContact = existUser;
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};
