const Token = require("../../../model/Utility/Token")
const crypto = require('crypto')

exports.createToken = async (req, res, next) => {
  const {email} = req.body
  const user = req.user 
  try {
    const tokenName = crypto.randomBytes(20).toString('hex');
    const token = new Token({
      token : tokenName,
      email,
      user
    })
    await token.save()
    req.token = token
    next();
  } catch (error) {
  return res.status(500).send('Internal server error');
  }
}