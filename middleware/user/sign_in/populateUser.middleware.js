  /*
 /  ---- populate user details middleware
/*/

// ----- import models
const CompanyInfo = require("../../../model/company/companyInfo.model")
const Company = require("../../../model/company/Company.model")
// ----- import populate function (hide extra details such as __id, __v, update dates, ...)
const { populateExtra } = require("../../../utility/others")

exports.populateUser = async (req, res, next) => {
// ----- get using information from request
  const user = req.user
  try {
// ----- initial newUser information
    let newUser= {}
// ----- import company info 
    if (user.company) {
      const companyId = user.company.toString()
      const companyInfo = await Company.findById(companyId)
      const company = await CompanyInfo.findById(companyInfo.companyInfo.toString())
      newUser.company   = company?._doc
    } else {
      newUser.company = {}
    }
// ----- parse data with populate function
    newUser.contact   = populateExtra(user.contact._doc )
    newUser.role      = populateExtra(user.role._doc    )
    newUser.password  = populateExtra(user.password._doc)
    newUser.info      = populateExtra(user.info?._doc   )
    // if you have extra thing to add just follow this template and put them here ....
// ----- collect created date
    newUser.createdAt = user.creation_date
    newUser._id = user.id
// ----- replace request information
    req.user = newUser
// ----- pass to next middleware
    next()
  } catch (error) {
    return res.status(500).send('Internal server error')
  }
};