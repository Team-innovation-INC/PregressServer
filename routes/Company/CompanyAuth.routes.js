const { createCompanyInputs } = require("../../validation/validator/company/createCompanyInputs");
const validateInputs = require("../../validation/validator/validationInputs.config");

const router = require("express").Router();

// test route auth 
router.get("/test", (req, res) => {
  const reqUrl = req.headers.referer
  const url = reqUrl.split("//")[1]
  const SentQuery  = req.query
  res.status(200).send({message: "done"});
});

  /*
 /  ----  sign up route auth (send active email)
/*/

// router.post("/create-new", createCompanyInputs, validateInputs, checkCompanyExist, sendIdentify)

// router.get("/validate", checkDomain, validateRequest, validate)

// router.post("/validation", userExistAtCompany, validation)
module.exports = router;