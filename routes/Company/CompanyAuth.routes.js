const { companyAuthTag } = require("../../swagger/middlewares/company/auth/Auth_company.swagger.tag");
const { companyTestSwagger } = require("../../swagger/middlewares/company/auth/auth_company_description.swagger")
const { getUserDetails } = require("../../utility/passport.middleware");
const { authorizationHeaderValidator } = require("../../validation/validator/activeUser/activeParams");
const validateInputs = require("../../validation/validator/validationInputs.config");

const router = require("express").Router();

router.use(authorizationHeaderValidator, validateInputs, getUserDetails)
router.use('',  companyAuthTag)

  /*
 /  ----  test route
/*/

router.get( "/test", companyTestSwagger, (req, res) => { res.status(200).send("test auth company  page");});


  /*
 /  ----  sign up route auth (send active email)
/*/

// router.post("/create-new", createCompanyInputs, validateInputs, checkCompanyExist, sendIdentify)

// router.get("/validate", checkDomain, validateRequest, validate)

// router.post("/validation", userExistAtCompany, validation)
module.exports = router;