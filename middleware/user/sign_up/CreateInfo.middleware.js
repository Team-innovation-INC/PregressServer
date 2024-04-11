  /*
 /  ---- create new account info middleware
/*/

// ----- import model
const userInfo = require("../../../model/user/userInfo.model");

exports.createInfo = async (req, res, next) => {
  try {
// ----- create new model
    const info = new userInfo({})
// ----- save new model
    await info.save()
// ----- add new model to the request
    req.info = info
// ----- pass to next middleware
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};