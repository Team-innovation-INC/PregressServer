  /*
 /  ----  company auth router 
/*/

const router = require("express").Router();

//-- global middleware for company auth router
const { getUserDetails } = require("../../utility/passport.middleware"               );
const { userId         } = require("../../middleware/user/active/activeId.middleware");

// ----- validation inputs paths
const validateInputs = require("../../validation/validator/validationInputs.config");
//-- check hears token valid type
const { authorizationHeaderValidator } = require("../../validation/validator/activeUser/activeParams");


// ----- swagger auth descriptions
const { companyProviderTag     } = require("../../swagger/middleware/company/auth/Auth_company.swagger.tag"        );
const { companyProviderSwagger } = require("../../swagger/middleware/company/auth/auth_company_description.swagger");
const { isAdmin } = require("../../middleware/user/role/isAdmin.middleware");
const { accessGithub } = require("../../middleware/provider/github/access/access.middleware");
const { collectEnvironmentData } = require("../../middleware/provider/github/collectEnvirementData.middleware");
const { getAccessGithub } = require("../../middleware/provider/github/auth/getToken.middleware");
const { updateCompanyProviderList } = require("../../middleware/provider/github/auth/updateCompanyProviderList.middelware");
const redirectToURL = require("../../controller/company/companyAuth/createProvider.controller");
const { createProvider } = require("../../middleware/provider/github/auth/savePRovider.middleware");

  /*
 /  ----  global middleware for company auth
/*/

router.use(authorizationHeaderValidator, validateInputs, getUserDetails, isAdmin, userId);
router.use('',  companyProviderTag);

  /*
 /  ----  test route for auth company router
/*/

router.get( "/test",  companyProviderSwagger, (req, res) => { res.status(200).send("test company provider  page")});

// Route to initiate the integration process with GitHub
router.get("/access/github", accessGithub);
// Route to handle the redirection after the user authorizes access on the provider's authentication page
router.get("/auth/github", collectEnvironmentData, getAccessGithub, createProvider, updateCompanyProviderList, redirectToURL );

module.exports = router;