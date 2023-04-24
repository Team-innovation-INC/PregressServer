  /*
 /  ---- activate company middleware
/*/

// ----- import model
const Company = require("../../../model/company/Company.model")

exports.activateCompany = async(req, res, next) => {
// ----- get using information from request
  const {companyMembers, tokenInfo} = req
  try {
// ----- create new company model
    const company = new Company({
        verify :true,
        companyMembers,
        companyInfo: tokenInfo
    })
// ----- save company info
    await company.save()
    req.company = company.id.toString()
// ----- pass to next middleware
    next()
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
}