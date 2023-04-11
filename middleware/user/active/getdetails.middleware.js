const Token = require("../../../model/Utility/Token.model")

exports.getParams = async (req, res, next) => {
    const {token} = req.query
  try {
    const user = await Token.findOne({token})
    if(!user) {
     return  res.status(400).send("your contact have been activated please try to sign in or resigned up")
    }
    req.tokenUser = user
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
}