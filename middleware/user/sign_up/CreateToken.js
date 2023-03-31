const Token = require("../../../model/Utility/Token")
const crypto = require('crypto')

exports.createToken = async (req, res, next) => {
  const user =  req.user.contact
  try {
    console.log("user", user)
    const token = crypto.randomBytes(20).toString('hex');
    const newToken = new Token({ token, user, type: "activate-account" })
    await newToken.save()
    req.token = newToken
    next();
  } catch (error) {
    console.log("error", error)
  return res.status(500).send('Internal server error');
  }
}