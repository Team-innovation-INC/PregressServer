  /*
 /  ---- check real website send response middleware
/*/

// ----- import model
const CompanyInfo = require("../../../model/company/companyInfo.model")

exports.validateWebSite = async(req, res, next) => {
// ----- get using information from request
  const {referer} = req.headers
  const {tokenInfo} = req
  try {
// ----- find company website from database
    const info = await CompanyInfo.findById(tokenInfo)
// ----- sender website and website illustrate muches
    if (!referer.includes(info.companyWebSite)) {
      return res.status(401).send({message: "please make sure that you include the script on your entry html file"})
    }
// ----- pass to next middleware
    next()
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
}