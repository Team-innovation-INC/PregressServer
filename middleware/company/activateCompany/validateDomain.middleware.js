const CompanyInfo = require("../../../model/company/companyInfo.model")

exports.validateWebSite = async(req, res, next) => {
  const {referer} = req.headers
  const {tokenInfo} = req
  try {
    const info = await CompanyInfo.findById(tokenInfo)
    if (!referer.includes(info.companyWebSite)) {
      return res.status(401).send({message: "please make sure that you include the script on your entry html file"})
    }
    next()
  } catch (error) {
    console.log("error", error)
    return res.status(500).send('Internal server error');
  }
}