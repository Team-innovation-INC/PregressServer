const userContact = require("../../../model/user/userContacts");

exports.createContact = async (req, res, next) => {
  const {userName, fullName, email} = req.body
  try {
    const contact = new userContact({
      userName, fullName, email
    })  
    req.contact = contact
    contact.save()
    next();
  } catch (error) {
    console.log("error", error)
    return res.status(500).send('Internal server error');
  }
};