/*
 /  ----  company auth router
/ */

const router = require('express').Router();

// -- global middleware for company auth router
const { getUserDetails } = require('../../utility/passport.middleware');
const { userId } = require('../../middleware/user/active/activeId.middleware');

// ----- validation inputs paths
const validateInputs = require('../../validation/validator/validationInputs.config');
// -- check hears token valid type
const {
  authorizationHeaderValidator,
} = require('../../validation/validator/activeUser/activeParams');

// ----- swagger auth descriptions
const {
  companyProviderTag,
} = require('../../swagger/middleware/company/auth/Auth_company.swagger.tag');
const {
  companyProviderSwagger,
} = require('../../swagger/middleware/company/auth/auth_company_description.swagger');
const {
  accessGithub,
} = require('../../middleware/provider/github/access/access.middleware');
const {
  findProviderList,
} = require('../../middleware/provider/management/listProviders');
const getListProviders = require('../../controller/company/provider/getListProviders');
const {
  populateUser,
} = require('../../middleware/user/sign_in/populateUser.middleware');

/*
 /  ----  global middleware for company auth
/ */

router.use(
  authorizationHeaderValidator,
  validateInputs,
  getUserDetails,
  userId,
);
router.use('', companyProviderTag);

/*
 /  ----  test route for auth company router
/ */

router.get('/test', companyProviderSwagger, (req, res) => {
  res.status(200).send('test company provider  page');
});

// Route to initiate the integration process with GitHub
router.get('/access/github', accessGithub);

router.get('/list', populateUser, findProviderList, getListProviders);

module.exports = router;
