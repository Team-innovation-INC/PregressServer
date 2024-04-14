/*
 /  ---- create new account contact middleware
/ */

// ----- import model
const UserContact = require('../../../model/user/userContacts.model');

exports.createContact = async (req, res, next) => {
  // ----- get using information from request
  const { userName, fullName, email } = req.body;

  // ----- create new model
  const contact = new UserContact({
    userName,
    fullName,
    email: email.toLowerCase(),
  });
  // ----- save new model
  await contact.save();
  // ----- add new model to the request
  req.contact = contact;
  // ----- pass to next middleware
  next();
};
