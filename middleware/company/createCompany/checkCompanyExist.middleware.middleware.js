  /*
 /  ---- check company exists middleware
/*/

// ----- import model
const CompanyInfo = require("../../../model/company/companyInfo.model")

exports.checkCompanyExist = async(req, res, next) => {
// ----- get using information from request
  const {companyName, companyWebSite} = req.body
  try {
// ----- find company exist using companyWebSite params
    const existCompany = await CompanyInfo.findOne({companyWebSite})
// ----- return error request in case of company exist
    if (existCompany) {
      return res.status(400).send({message: "company exist"})
    }
// ----- pass to next middleware
    next()
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
}