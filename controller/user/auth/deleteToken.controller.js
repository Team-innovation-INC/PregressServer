  /*
 /  ---- delete activate account token controller
/*/

// ----- import model
const Token = require("../../../model/Utility/Token.model")

const delateToken = async (req, res) => {
// ----- get using information from request
  const {token} = req.query

  try {
// ----- delete token document
    const result = await Token.deleteMany({token, type:"activate-account"})
// ----- case done response for status OK
    if(result) {
      return  res.status(200).send({message : "your account is activate with success you can now redirected to our site and sign in "})
    }
// ----- case a problem message for a problem
    return res.status(403).send({message: "oops we activate your account but if you get at the future some problem please contact us"})
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
}

module.exports = delateToken