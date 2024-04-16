/*
 /  ---- populate user details middleware
/ */

// ----- import models
const CompanyInfo = require('../../../model/company/companyInfo.model');
const Company = require('../../../model/company/Company.model');
// ----- import populate function (hide extra details such as __id, __v, update dates, ...)
const { populateExtra } = require('../../../utility/others');

exports.populateUser = async (req, res, next) => {
  // ----- get using information from request
  const user = req.user;
  console.log(user, "user")
  try {
    // ----- initial newUser information
    const newUser = {help: user.help};
    // ----- import company info
    if (user.company) {
      const companyInfo = await Company.findById(user.company);
      const company = await CompanyInfo.findById(
        companyInfo.companyInfo.toString(),
      );

      newUser.company = company?._doc;
    } else {
      newUser.company = {};
    }
    // ----- parse data with populate function
    newUser.contact = populateExtra(user.contact._doc);
    newUser.role = populateExtra(user.role._doc);
    newUser.password = populateExtra(user.password._doc);
    newUser.info = populateExtra(user.info?._doc);

    // if you have extra thing to add just follow this template and put them here ....
    // ----- collect created date
    newUser.createdAt = user.creation_date;
    newUser._id = user.id;
    // ----- replace request information
    req.user = newUser;
    req.company = user.company;

    // ----- pass to next middleware
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};
