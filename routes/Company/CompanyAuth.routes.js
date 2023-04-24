const sendLinkToUser = require("../../controller/company/companyauth/createNewCompany.controller");
const getCompaniesList = require("../../controller/company/companyauth/getCompaniesLis.controller");
const { checkExistToken } = require("../../middleware/company/activateCompany/checkToken.middleware");
const { validateWebSite } = require("../../middleware/company/activateCompany/validateDomain.middleware");
const { checkCompanyExist } = require("../../middleware/company/createCompany/checkCompanyExist.middleware.middleware");
const { createTokenCompany } = require("../../middleware/company/createCompany/createNewCompany.middleware");
const { checkUserCompanies } = require("../../middleware/company/getCmpanyList/checkUserCompanies.middleware");
const { userId } = require("../../middleware/user/active/activeId.middleware");
const { populateUser } = require("../../middleware/user/sign_in/populateUser.middleware");
const { companyAuthTag } = require("../../swagger/middlewares/company/auth/Auth_company.swagger.tag");
const { companyTestSwagger } = require("../../swagger/middlewares/company/auth/auth_company_description.swagger")
const { getUserDetails } = require("../../utility/passport.middleware");
const { authorizationHeaderValidator } = require("../../validation/validator/activeUser/activeParams");
const { createCompanyInputs, validationCompanyInputs } = require("../../validation/validator/company/companyAuth/createCompanyInputs");
const validateInputs = require("../../validation/validator/validationInputs.config");

const router = require("express").Router();

router.use(authorizationHeaderValidator, validateInputs, getUserDetails, userId)
router.use('',  companyAuthTag)

  /*
 /  ----  test route for auth company router
/*/

router.get( "/test",  companyTestSwagger, (req, res) => { res.status(200).send("test auth company  page");});


  /*
 /  ----  create route for a new company router
/*/

router.post( "/create", createCompanyInputs, validateInputs, populateUser, checkCompanyExist, createTokenCompany, sendLinkToUser);

  /*
 /  ----  activate route for activation of a created company router
/*/

router.get( "/activate", validationCompanyInputs, validateInputs, checkExistToken, validateWebSite, (req, res) => { const {token, email} = req.query ; res.status(200).send("activate created company");});

  /*
 /  ----  join route for asking joining existing company router
/*/

router.post( "/join", (req, res) => { res.status(200).send("join a company");});

  /*
 /  ----  create route for getting all companies list router
/*/

router.get( "/list", checkUserCompanies, getCompaniesList );

  /*
 /  ----  delete route for deleting an existing company router
/*/

router.delete( "/delete", (req, res) => { res.status(200).send("delete existing company");});

  /*
 /  ----  invite route for inviting a new user to join company router
/*/

router.post( "/invite", (req, res) => { res.status(200).send("invite a new user to a company");});


module.exports = router;