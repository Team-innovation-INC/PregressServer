  /*
 /  ---- company admin middleware
/*/

// ----- import model
const Company = require("../../../model/company/Company.model")

exports.findCompanyAdmin = async(req, res, next) => {
// ----- get using information from request
  const {companyId} = req.body
  try {
// ----- create new company members 
    const company = await Company.findById(companyId).populate(['companyMembers'])
    const adminId = company.companyMembers.admin.toString()
    req.adminId = adminId
// ----- pass to next middleware
    next()
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
}