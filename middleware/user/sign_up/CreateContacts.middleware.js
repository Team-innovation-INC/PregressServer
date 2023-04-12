  /*
 /  ---- create new account contact middleware
/*/

// ----- import model
const userContact = require("../../../model/user/userContacts.model");

exports.createContact = async (req, res, next) => {
// ----- get using information from request
  const {userName, fullName, email} = req.body

  try {
// ----- create new model
    const contact = new userContact({
      userName, fullName, email
    })
// ----- save new model
    await contact.save()
// ----- add new model to the request
    req.contact = contact
// ----- pass to next middleware
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};