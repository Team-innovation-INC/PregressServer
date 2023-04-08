const userContact = require("../../../model/user/userContacts.model");
const User = require("../../../model/user/Users.model");

exports.createUserModel = async (req, res, next) => {
  const role = req.role.id
  const contact = req.contact.id
  const {password} = req.body;
  try {
    const newUser = new User({
     password, role, contact
    })
    req.user = newUser
    next();
  } catch (error) {
    console.log("error", error)
    return res.status(500).send('Internal server error');
  }
}