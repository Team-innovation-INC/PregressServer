  /*
 /  ----add company to user model middleware
/*/

// ----- import model
const User = require("../../../model/user/Users.model")

exports.addCompanyToUser = async(req, res, next) => {
// ----- get using information from request
  const {user, company} = req
  try {
// ----- update user model
    await User.findByIdAndUpdate(user.id.toString(), {$set:{company}})
// ----- pass to next middleware
    next()
  } catch (error) {
    console.log("error", error)
    return res.status(500).send('Internal server error');
  }
}