/*
 /  ---- update user info controller
/ */

const userInfo = require("../../../model/user/userInfo.model");

const updateUserInfo = async (req, res, next) => {
  // ----- get using information from request
  const UserInfoId = req.userInfoId;
  const { gender, age, bio, pic } = req.body;
  try {

    // ----- request database to update user info
    await userInfo.findByIdAndUpdate(
      UserInfoId,
      { $set: { gender, age, bio, pic } },
      { new: true, runValidators: true }
    );
    // ----- response update info success
    next()
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};

module.exports = updateUserInfo;
