/*
 /  ---- update user contact controller ( expected email)
/ */

// ----- import model
const userContact = require('../../../model/user/userContacts.model');

const userContactUpdate = async (req, res) => {
  // ----- get using information from request
  const { fullName, userName } = req.body;
  const { userContactId } = req;

  try {
    // ----- request database to update user contact ( just update userName and fullName)
    await userContact.findByIdAndUpdate(
      userContactId,
      { $set: { fullName, userName } },
      { new: true, runValidators: true },
    );
    // ----- response update contact success
    return res.status(200).send({ message: 'info update with success' });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).send({ message: 'userName already exists' });
    }
    return res.status(500).send('Internal server error');
  }
};

module.exports = userContactUpdate;
