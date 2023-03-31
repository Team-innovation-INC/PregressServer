const login = require("../../controller/user/auth/singIn");
const register = require("../../controller/user/auth/singUp");
const { sendEmailActivation } = require("../../middleware/nodeMailer/activateAccount");
const { delateToken } = require("../../middleware/user/active/deleteToken");
const { getParams } = require("../../middleware/user/active/getdetails");
const { checkEmail } = require("../../middleware/user/signIn/checkEmail");
const { populateUser } = require("../../middleware/user/signIn/populateResuts");
const { createContact } = require("../../middleware/user/sign_up/CreateContacts");
const { createPassword } = require("../../middleware/user/sign_up/CreatePassword");
const { createRole } = require("../../middleware/user/sign_up/CreateRole");
const { createToken } = require("../../middleware/user/sign_up/CreateToken");
const { createUserModel } = require("../../middleware/user/sign_up/createUserModel");
const { existUser } = require("../../middleware/user/sign_up/middleware");
const { signInInputs } = require("../../validation/validator/auth-user/sign-InInputs");
const { signUpInputs } = require("../../validation/validator/auth-user/sign-upInputs");
const validateInputs = require("../../validation/validator/validationInputs");

const router = require("express").Router();

// test route auth 
router.get("/test", (req, res) => {
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