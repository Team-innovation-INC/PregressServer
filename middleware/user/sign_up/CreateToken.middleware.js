  /*
 /  ---- create new token for activation account middleware
/*/

// ----- import model
const Token = require("../../../model/Utility/Token.model")
// ----- import crypto for token hashed
const crypto = require('crypto')

exports.createToken = async (req, res, next) => {
// ----- get using information from request
  const password = req.password?.id
  const contact  = req.contact?.id
  const role     = req.role?.id
  const info     = req.info?.id
  const type     = req.type
  const {email}  = req.body

  try {
// ----- create crypt token string
    const token = crypto.randomBytes(20).toString('hex');
// ----- create new model
    const newToken = new Token({ token, contact, password, info, role, email, type: type || "activate-account" })
// ----- save new model
    await newToken.save()
// ----- add new model to the request
    req.token = newToken
// ----- pass to next middleware
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
}