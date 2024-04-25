/*
 /  ---- update user contact controller ( expected email)
/ */

// ----- import model
const User = require('../../../model/user/Users.model');

const userHelpFieldUpdate = async (req, res, next) => {
  // ----- get using information from request
  const { id } = req;
  const { fieldToUpdate } = req.body;

    // ----- request database to update user contact ( just update userName and fullName)
    await User.findByIdAndUpdate(id, {
      $set: {
        [`help.${fieldToUpdate}`]: true,
      }
    }, { new: true })
    // ----- response update contact success
    req.status = 201;
    next();

};

module.exports = userHelpFieldUpdate;
