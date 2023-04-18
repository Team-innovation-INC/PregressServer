  /*
 /  ---- update user info controller
/*/

// ----- import model
const UserInfo = require("../../../model/user/userInfo.model");

const userInfoUpdate =  async (req, res) => {
// ----- get using information from request
  const UserInfoId = req.userInfoId
  const { gender, age, bio, pic } = req.body; 

  try {
// ----- request database to update user info 
    await UserInfo.findByIdAndUpdate(
      UserInfoId,
      { gender, age, bio, pic },
    );
// ----- response update info success
    return res.status(200).send({message: "info update with success"})
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};

module.exports = userInfoUpdate;
