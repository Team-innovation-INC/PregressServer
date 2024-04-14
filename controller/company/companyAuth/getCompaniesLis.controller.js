/*
 /  ---- company list controller
/ */

// ----- import company model
const Company = require('../../../model/company/Company.model');

const getCompaniesList = async (req, res) => {
  try {
    // ----- find company list
    const CompaniesList = await Company.find().populate(['companyInfo']);
    // -------- response send for no company exist
    if (CompaniesList.length === 0) {
      return res.status(200).send({
        message: 'no company exist please try to create new one ',
        companies: CompaniesList,
      });
    }
    // -------- response send for existing companies
    return res.status(200).send({
      message: 'this is the list of companies ',
      companies: CompaniesList,
    });
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};

module.exports = getCompaniesList;
