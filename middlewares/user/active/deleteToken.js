const Token = require("../../../model/Utility/Token")

exports.delateToken = async (req, res) => {
    const {token} = req.query
  try {
    const result = await Token.deleteMany({token})
    if(result) {
       return  res.status(200).send({message : "Welcome to our site"})
    }
    return res.status(403).send({message: "opps we activate your account but if you get at the furture some problem please contact us"})
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
}