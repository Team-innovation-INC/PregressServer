const Token = require("../../../model/Utility/Token")

exports.getParams = async (req, res, next) => {
    const {email, token} = req.query
  try {
    const user = await Token.findOne({token})
    if(user.email !== email) {
        return res.send("please check your link")
    }
    req.user = user.user
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
}