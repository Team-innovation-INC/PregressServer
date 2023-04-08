const login = require("../../controller/user/auth/singIn.controller");
const register = require("../../controller/user/auth/singUp.controller");
const { sendEmailActivation } = require("../../middleware/nodeMailer/activateAccount.middleware");
const { delateToken } = require("../../middleware/user/active/deleteToken.middleware");
const { getParams } = require("../../middleware/user/active/getdetails.middleware");
const { checkEmail } = require("../../middleware/user/signIn/checkEmail.middleware");
const { populateUser } = require("../../middleware/user/signIn/populateResuts.middleware");
const { createContact } = require("../../middleware/user/sign_up/CreateContacts.middleware");
const { createPassword } = require("../../middleware/user/sign_up/CreatePassword.middleware");
const { createRole } = require("../../middleware/user/sign_up/CreateRole.middleware");
const { createToken } = require("../../middleware/user/sign_up/CreateToken.middleware");
const { createUserModel } = require("../../middleware/user/sign_up/createUserModel.middleware");
const { existUser } = require("../../middleware/user/sign_up/middleware.middleware");
const { tagNameUserAuth } = require("../../swagger/middlewares/tagNames");
const { signInInputs } = require("../../validation/validator/auth-user/sign-InInputs");
const { signUpInputs } = require("../../validation/validator/auth-user/sign-upInputs");
const validateInputs = require("../../validation/validator/validationInputs.config");

const router = require("express").Router();

  /*
 /  ----  test route
/*/
router.use('',  tagNameUserAuth)
router.get("/test", (req, res) => {
  // #swagger.summary = 'Some summary...'
  // #swagger.description = 'Some description...'

  res.status(200).send("test auth router page");
});

  /*
 /  ----  sign up route auth (send active email)
/*/
router.post("/sign-up", signUpInputs, validateInputs , existUser,  createRole,  createContact, createPassword, createUserModel, createToken, sendEmailActivation);

  /*
 /  ----  sign up route auth (active account using email sent)
/*/
router.get("/activate-account", getParams   , register, delateToken );

  /*
 /  ----  sign in route auth (send token for authentication)
/*/
router.post("/sign-in", signInInputs, validateInputs, checkEmail, populateUser, login                                                              );

  // // reset password inprogress
  // router.post("/reset-password"    ,resetInputs   , validateInputs, checkUserExist, resetPassword                                      );

module.exports = router;