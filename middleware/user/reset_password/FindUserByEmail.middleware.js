const userContact = require('../../../model/user/userContacts.model');
const User = require('../../../model/user/Users.model');
const Token = require('../../../model/Utility/Token.model');

exports.finderByEmail = async (req, res, next) => {
  // ----- get using information from request
  const token = req.headers.referer.split('?token=')[1];
  try {
    // ----- find email user by for this token
    const result = await Token.findOne({ token, type: 'reset-password' });
    if (!result) {
      return res.status(401).send({ message: 'unauthorized' });
    }
    const { email } = result;
    // ----- find user contact
    const UserContact = await userContact.findOne({ email });
    // ----- find user details
    const user = await User.findOne({ contact: UserContact.id });
    // ----- add user information to the request
    req.passwordId = user.password;
    req.email = email;
    // ----- pass to next middleware
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};
