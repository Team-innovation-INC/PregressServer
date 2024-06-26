/*
 /  ----  company auth router
/ */

const router = require('express').Router();

// ----- controller auth paths
const sendLinkToUser = require('../../controller/company/companyAuth/createNewCompany.controller');
const deleteActivateToken = require('../../controller/company/companyAuth/deleteActivateToken.controller');
const getCompaniesList = require('../../controller/company/companyAuth/getCompaniesLis.controller');

// ----- middleware auth paths

// -- active company account
const {
  checkExistToken,
} = require('../../middleware/company/activateCompany/checkToken.middleware');
const {
  validateWebSite,
} = require('../../middleware/company/activateCompany/validateDomain.middleware');
const {
  checkValidWebsite,
} = require('../../middleware/company/activateCompany/createCompanyMembers.middleware');
const {
  activateCompany,
} = require('../../middleware/company/activateCompany/activateCompany.middleware');
const {
  addCompanyToUser,
} = require('../../middleware/company/activateCompany/addUserToCompany.middleware');
const {
  upgradeUserRoleToAdmin,
} = require('../../middleware/company/activateCompany/adminUser.middleware');

// -- create company account
const {
  populateUser,
} = require('../../middleware/user/sign_in/populateUser.middleware');
const {
  checkCompanyExist,
} = require('../../middleware/company/createCompany/checkCompanyExist.middleware.middleware');
const {
  createTokenCompany,
} = require('../../middleware/company/createCompany/createNewCompany.middleware');

// -- get company account list
const {
  checkUserCompanies,
} = require('../../middleware/company/getCompanyList/checkUserCompanies.middleware');

// -- global middleware for company auth router
const { getUserDetails } = require('../../utility/passport.middleware');
const { userId } = require('../../middleware/user/active/activeId.middleware');

// ----- validation inputs paths
const validateInputs = require('../../validation/validator/validationInputs.config');
// -- check hears token valid type
const {
  authorizationHeaderValidator,
} = require('../../validation/validator/activeUser/activeParams');
// -- check routes inputs
const {
  createCompanyInputs,
  validationCompanyInputs,
  validationJoinCompanyInputs,
} = require('../../validation/validator/company/companyAuth/createCompanyInputs');

// ----- swagger auth descriptions
const {
  companyAuthTag,
} = require('../../swagger/middleware/company/auth/Auth_company.swagger.tag');
const {
  companyTestSwagger,
} = require('../../swagger/middleware/company/auth/auth_company_description.swagger');
const {
  createJoinNotificationInfo,
} = require('../../middleware/company/joinCompany/createNotificationInfo.middleware');
const {
  findCompanyAdmin,
} = require('../../middleware/company/joinCompany/findAdminCompnay.middleware');
const {
  createJoinNotification,
} = require('../../middleware/company/joinCompany/createNotificationJoin.middleware');
const {
  checkExistNotification,
} = require('../../middleware/company/joinCompany/checkExistRequest.middleware');

/*
 /  ----  global middleware for company auth
/ */

router.use(
  authorizationHeaderValidator,
  validateInputs,
  getUserDetails,
  userId,
);
router.use('', companyAuthTag);

/*
 /  ----  test route for auth company router
/ */

router.get('/health-care', companyTestSwagger, (req, res) => {
  res.status(200).send({message : "company route health care work as expected", status: 200, success : true});
});

/*
 /  ----  create route for a new company router
/ */

router.post(
  '/create',
  createCompanyInputs,
  validateInputs,
  populateUser,
  checkCompanyExist,
  createTokenCompany,
  sendLinkToUser,
);

/*
 /  ----  activate route for activation of a created company router
/ */

router.get(
  '/activate',
  validationCompanyInputs,
  validateInputs,
  checkExistToken,
  validateWebSite,
  checkValidWebsite,
  activateCompany,
  addCompanyToUser,
  upgradeUserRoleToAdmin,
  deleteActivateToken,
);

/*
 /  ----  join route for asking joining existing company router
/ */

router.post(
  '/join',
  validationJoinCompanyInputs,
  validateInputs,
  findCompanyAdmin,
  checkExistNotification,
  createJoinNotificationInfo,
  createJoinNotification,
  (req, res) => {
    console.log('req', req.body.companyId);
    res.status(200).send('join a company');
  },
);

/*
 /  ----  create route for getting all companies list router
/ */

router.get('/list', checkUserCompanies, getCompaniesList);

/*
 /  ----  delete route for deleting an existing company router
/ */

router.delete('/delete', (req, res) => {
  res.status(200).send('delete existing company');
});

/*
 /  ----  invite route for inviting a new user to join company router
/ */

router.post('/invite', (req, res) => {
  res.status(200).send('invite a new user to a company');
});

module.exports = router;
