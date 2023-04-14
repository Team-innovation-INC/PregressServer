const bcrypt = require('bcryptjs');

  /*
 /  ---- delete activate account token controller
/*/

// ----- import model
const Password = require("../../../model/user/password.model");
const Token = require('../../../model/Utility/Token.model');

const resetPasswordValidation = async (req, res) => {
  const passwordId= req.passwordId
  const email = req.email
  const {password} = req.body
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const updatePassword = await Password.findByIdAndUpdate(passwordId, {
        password: hash
    })
// ----- case done response for status OK
    if(updatePassword) {
        await Token.deleteMany({email, type:"reset-password" })
      return  res.status(200).send({message : "your password have been changes with success"})
    }
// ----- case a problem message for a problem
    return res.status(403).send({message: "something wrong please try again "})
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
}

module.exports = resetPasswordValidation