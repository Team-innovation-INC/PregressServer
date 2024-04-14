/*
 /  ---- create new account info middleware
/ */

// ----- import model
const UserInfo = require('../../../model/user/userInfo.model');

exports.createInfo = async (req, res, next) => {
  // ----- create new model
  const info = new UserInfo({});
  // ----- save new model
  await info.save();
  // ----- add new model to the request
  req.info = info;
  // ----- pass to next middleware
  next();
};
