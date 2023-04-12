  /*
 /  ----  auth router 
/*/
const router = require("express").Router();

// ----- controller auth paths
const login               = require("../../controller/user/auth/singIn.controller"         );
const sendEmailActivation = require("../../controller/user/auth/activateAccount.controller");
const delateToken         = require("../../controller/user/auth/deleteToken.controller"    );
const resetPassword       = require("../../controller/user/auth/resetPassword.controller"  );

// ----- middleware auth paths

//-- active account
const { getParams } = require("../../middleware/user/active/getdetails.middleware");
const { register  } = require("../../middleware/user/active/singUp.middleware"    );
//-- sign in account
const { checkEmail   } = require("../../middleware/user/sign_in/checkEmail.middleware"  );
const { populateUser } = require("../../middleware/user/sign_in/populateUser.middleware");
//-- sign up account
const { createContact  } = require("../../middleware/user/sign_up/CreateContacts.middleware");
const { createPassword } = require("../../middleware/user/sign_up/CreatePassword.middleware");
const { createRole     } = require("../../middleware/user/sign_up/CreateRole.middleware"    );
const { createToken    } = require("../../middleware/user/sign_up/CreateToken.middleware"   );
const { existUser      } = require("../../middleware/user/sign_up/existUser.middleware"     );
//-- reset password account
const { checkUserExist } = require("../../middleware/user/reset_password/CheckUserExist.middleware");

// ----- validation inputs paths
const validateInputs   = require("../../validation/validator/validationInputs.config");
//--- validation sign in inputs
const { signInInputs } = require("../../validation/validator/auth-user/sign-InInputs");
//--- validation sign up inputs
const { signUpInputs } = require("../../validation/validator/auth-user/sign-upInputs");

// ----- swagger auth descriptions
const { tagNameUserAuth } = require("../../swagger/middlewares/user/auth/Auth_user.swagger.tag");
const { signupSwagger, signingSwagger, activateAccountSwagger, authTestSwagger } = require("../../swagger/middlewares/user/auth/auth_user_description.swagger");
const { resetInputs } = require("../../validation/validator/auth-user/resetPasswordInputs");
const { CheckEmailSent } = require("../../middleware/user/reset_password/EmailsSents.middleware");

router.use('',  tagNameUserAuth)

  /*
 /  ----  test route
/*/
router.get( "/test",authTestSwagger, (req, res) => { res.status(200).send("test auth router page");});

  /*
 /  ----  sign up route auth (send active email)
/*/
router.post( "/sign-up", signupSwagger, signUpInputs, validateInputs, existUser, createRole, createContact, createPassword, createToken, sendEmailActivation );

  /*
 /  ----  sign up route auth (active account using email sent)
/*/
router.get( "/activate-account", activateAccountSwagger, getParams, register, delateToken );

  /*
 /  ----  sign in route auth (send token for authentication)
/*/
router.post( "/sign-in", signingSwagger, signInInputs, validateInputs, checkEmail, populateUser, login );

  /*
 /  ----  reset password route auth (resent password -- send email)
/*/
router.post("/reset-password" ,resetInputs , validateInputs, checkUserExist, CheckEmailSent, createToken, resetPassword );

  /*
 /  ----  update password route auth (resent password using sent email)
/*/
router.get("/reset-password/" , (req, res) => {
  const hello = req.query.name
  res.send("reset" + hello)} );


module.exports = router;