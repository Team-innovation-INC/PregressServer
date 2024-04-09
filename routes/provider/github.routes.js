  /*
 /  ----  company auth router 
/*/

const router = require("express").Router();

// ----- swagger auth descriptions
const { companyProviderTag     } = require("../../swagger/middleware/company/auth/Auth_company.swagger.tag"        );
const { collectEnvironmentData } = require("../../middleware/provider/github/collectEnvirementData.middleware");
const { getAccessGithub } = require("../../middleware/provider/github/auth/getToken.middleware");
const { updateCompanyProviderList } = require("../../middleware/provider/github/auth/updateCompanyProviderList.middelware");
const redirectToURL = require("../../controller/company/companyAuth/createProvider.controller");
const { createProvider } = require("../../middleware/provider/github/auth/saveProvider.middleware");
const { getUserDetailsByEmail } = require("../../middleware/user/details/getUserDetails.middleware");
const { populateUser } = require("../../middleware/user/sign_in/populateUser.middleware");

  /*
 /  ----  global middleware for company auth
/*/

 router.use('',  companyProviderTag);

  /*
 /  ----  test route for provider router
/*/

// Route to handle the redirection after the user authorizes access on the provider's authentication page
router.get("/auth/github", collectEnvironmentData, getAccessGithub, getUserDetailsByEmail, populateUser, createProvider, updateCompanyProviderList, redirectToURL );


module.exports = router;