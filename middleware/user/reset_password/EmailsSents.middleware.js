  /*
 /  ---- check email sent middleware
/*/

// ----- import models
const User  = require("../../../model/user/Users.model"   );
const Token = require("../../../model/Utility/Token.model");

exports.CheckEmailSent = async (req, res, next) => {
// ----- get using information from request
  const {email} = req.body

  try {
// ----- find token exist
    const exist_user = await Token.find({email})
// ----- case token exist more then n-1 times 
    if (exist_user.length > 8 ) {
// ----- block user
      await User.findOneAndUpdate({contact : req.userId}, {blocked : true})
// ----- response to use that he can't sent more times and he is now blocked
      return  res.status(400).send({message: "we have sent your password more then 6 time please contact us to unblock you"})
    }
// ----- pass to next middleware
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};