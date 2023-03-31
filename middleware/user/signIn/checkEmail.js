const UserContact  = require("../../../model/user/userContacts");
const User         = require("../../../model/user/Users");

exports.checkEmail = async (req, res, next) => {
  const {email} = req.body
  try {
    const contact = await UserContact.findOne({ email });
    if (!contact) {
      return res.status(400).json({ error: 'your account is not exist please try to sign up' });
    }
    const user = await User.findOne({ contact : contact.id }).populate(['password', 'contact', 'role'])
    req.user = user
    next();
  } catch (error) {
    console.log("error", error)
    return res.status(500).send('Internal server error');
  }
};