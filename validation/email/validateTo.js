const User = require("../../model/user/Users")

exports.validationTo = async (req, res, next) => {
  const {userName} =  req.body
  try {
    const response = await User.findOne({userName})
    if (!response) {
      return res.status(400).send({message: "email for this user doesn't exist please verify and try again"})
    }
    req.message = {...req.message, to: response.id}
    next()
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
}