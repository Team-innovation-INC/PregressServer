const Token = require("../../../model/Utility/Token")
const crypto = require('crypto')

exports.createToken = async (req, res, next) => {
  const password = req.password
  const contact    =  req.user.contact
  const role       = req.role 
  try {
    const token = crypto.randomBytes(20).toString('hex');
    const newToken = new Token({ token, contact, password, role, type: "activate-account" })
    await newToken.save()
    req.token = newToken
    next();
  } catch (error) {
    console.log("error", error)
  return res.status(500).send('Internal server error');
  }
}