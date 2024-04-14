/*
 /  ---- check company exists middleware
/ */

// ----- import model
const Company = require('../../../model/company/Company.model');
const CompanyInfo = require('../../../model/company/companyInfo.model');
const Token = require('../../../model/Utility/Token.model');

exports.checkCompanyExist = async (req, res, next) => {
  // ----- get using information from request
  const { companyName, companyWebSite, bio } = req.body;
  const { user } = req;
  try {
    // ----- find company exist using companyWebSite params
    const existCompany = await CompanyInfo.findOne({ companyWebSite });
    // ----- return request for exist company account while not validate
    if (existCompany) {
      const companyToken = await Token.findOne({
        type: 'create-company',
        info: existCompany.id,
        email: user.contact.email,
      });
      if (companyToken) {
        return res.status(200).send({
          message: 'please validate your company',
          token: companyToken.token,
          email: user.contact.email,
          validate: false,
        });
      }
      const ValidateCompany = await Company.findOne({
        companyInfo: existCompany.id,
      });
      if (ValidateCompany) {
        return res
          .status(400)
          .send({ message: 'this web site is already validate' });
      }
    }
    // ----- create new company model
    const companyInfo = new CompanyInfo({ companyName, companyWebSite, bio });
    await companyInfo.save();
    req.companyInfo = companyInfo;
    // ----- pass to next middleware
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};
