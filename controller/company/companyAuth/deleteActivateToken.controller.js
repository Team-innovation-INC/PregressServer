  /*
 /  ---- remove token for user controller
/*/

// ----- import model
const Token = require("../../../model/Utility/Token.model");

const deleteActivateToken =  async (req, res) => {
// ----- get using information from request
    const {email} = req.query
  try {
// ----- delete token 
    await Token.deleteMany({email})
// -------- response send for success
    return res.status(200).send({message: "your company was activate with success"})
  } catch (error) {
    console.log("error", error)
    return res.status(500).send('Internal server error');
  }
};

module.exports = deleteActivateToken;