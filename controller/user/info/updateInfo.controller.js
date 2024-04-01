  /*
 /  ---- update user info controller
/*/

// ----- import model
const UserInfo = require("../../../model/user/userInfo.model");

const userInfoUpdate =  async (req, res) => {
// ----- get using information from request
  const UserInfoId = req.userInfoId
  const { 
    info,
    localization,
    firstName,
    lastName
  } = req.body;
  const newUser = req.newUser
  console.log( info,
    localization,
    firstName,
    lastName, "request body")
    console.log(newUser , UserInfoId, "new user")
  try {
// ----- request database to update user info 

// ----- response update info success
    return res.status(200).send({message: "info update with success"})
  } catch (error) {
    console.log(error, "error")
    return res.status(500).send('Internal server error');
  }
};

module.exports = userInfoUpdate;
