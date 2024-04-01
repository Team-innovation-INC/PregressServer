  /*
 /  ---- extract user ids to request middleware
/*/


const Info = require("../../../model/user/userInfo.model")

exports.userId = async(req, res, next) => {
// ----- get using information from request
  const user = req.user 
  try {
// ----- parse ids to request
    req.userContactId  = user.contact
    req.userPasswordId = user.password
    req.userRoleId     = user.role
    req.userCompanyId  = user.company
    req.userInfoId     = user.info
// ----- pass to next middleware
    next()
  } catch (error) {
    console.log(error)
    return res.status(500).send('Internal server error');
  }
}