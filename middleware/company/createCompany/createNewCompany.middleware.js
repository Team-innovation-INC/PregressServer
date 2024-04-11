  /*
 /  ---- create new company account middleware
/*/

// ----- import crypto for token hashed
const crypto = require('crypto')
// ----- import model
const Token = require("../../../model/Utility/Token.model")

exports.createTokenCompany = async(req, res, next) => {
// ----- get using information from request
  const { companyInfo, user } = req
  try {
// ----- create crypt token string
const token = crypto.randomBytes(20).toString('hex');
// ----- create token for new company to validate
    const companyToken = new Token({
      token,
      email: user.contact.email,
      type: "create-company",
      info: companyInfo.id
    })
    await companyToken.save()
// ----- pass to next middleware
    req.token = token
    req.email = user.contact.email
    next()
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
}