  /*
 /  ---- send activate email for new user sign in 
/*/

// ----- import model
const Token = require("../../../model/Utility/Token.model")

exports.getParams = async (req, res, next) => {
// ----- get using information from request
  const {token} = req.query

  try {
// ----- find token
    const activateToken = await Token.findOne({token})
// ----- case token not exist return correspondent response
    if(!activateToken) {
      return res.status(400).send({message: "your contact have been activated please try to sign in or resigned up"})
    }
// ----- add token information to the request
    req.tokenUser = activateToken
// ----- pass to next middleware
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
}