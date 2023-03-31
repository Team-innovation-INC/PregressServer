const Token = require("../../../model/Utility/Token")

exports.delateToken = async (req, res) => {
    const {token} = req.query
  try {
    const result = await Token.deleteMany({token, type:"activate-account"})
    if(result) {
       return  res.status(200).send({message : "your account is activate with success you can now redirected to our site and sign in "})
    }
    return res.status(403).send({message: "oops we activate your account but if you get at the future some problem please contact us"})
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
}