exports.ExistWebsite = async (req, res, next) => {
    const reqUrl = req.headers.referer
    const url = reqUrl.split("//")[1]
    try {
      const companyUrl = url.split('/')[0]
      const existCompany = Company.findOne({CompanyName })
        next()
    } catch (error) {
        
    }
}