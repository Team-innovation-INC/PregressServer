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
const { createInfo     } = require("../../middleware/user/sign_up/CreateInfo.middleware"    );
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
const { tagNameUserAuth } = require("../../utility/node-mailer/EmailsTemplates/Auth_user.swagger.tag");

const { signupSwagger, signingSwagger, activateAccountSwagger, authTestSwagger, requestResetPasswordSwagger, resetUserPasswordSwagger, fetchGoogleUserInfoSwagger, accessGoogleAuthSwagger, resetPasswordPageSwagger } = require("../../swagger/middleware/user/auth/auth_user_description.swagger");
const { resetInputs, resetPasswordInputs } = require("../../validation/validator/auth-user/resetPasswordInputs");
const { CheckEmailSent } = require("../../middleware/user/reset_password/EmailsSents.middleware");
const { resetPasswordFile } = require("../../controller/user/auth/resetPasswordFile.controller");
const { finderByEmail } = require("../../middleware/user/reset_password/FindUserByEmail.middleware");
const resetPasswordValidation = require("../../controller/user/auth/resetPasswordValidation.controller");

const { handleAuthorizationCode } = require("../../middleware/provider/google/authCode.middleware");
const { handleGoogleSignIn } = require("../../middleware/provider/google/googleSignIn.middleware");
const { fetchGoogleUserInfo } = require("../../middleware/provider/google/googleUserInfo.middleware");
const handleGoogleAuth = require("../../controller/user/provider/accessGoogle.controller");
const { generateGoogleAuthUrl } = require("../../middleware/provider/google/googleAccess.middleware");

router.use('',  tagNameUserAuth)

  /*
 /  ----  test route
/*/
router.get( "/test",authTestSwagger, (req, res) => { res.status(200).send("test auth router page");});

  /*
 /  ----  sign up route auth (send active email)
/*/
router.post( "/sign-up", signupSwagger, signUpInputs, validateInputs, existUser, createInfo,  createRole, createContact, createPassword, createToken, sendEmailActivation );

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
router.post("/reset-password", requestResetPasswordSwagger,resetInputs , validateInputs, checkUserExist, CheckEmailSent, createToken, resetPassword );

  /*
 /  ----  update password route auth (resent password using sent email)
/*/
router.get("/reset-password/" , resetPasswordPageSwagger, resetPasswordFile)

router.post("/reset-password-validation/", resetUserPasswordSwagger, resetPasswordInputs, validateInputs, finderByEmail , resetPasswordValidation)

// Route for accessing the popup to initiate Google connection
router.get('/sign-in/google', accessGoogleAuthSwagger, generateGoogleAuthUrl, handleGoogleAuth);

router.get('/sign-in/google/redirect', fetchGoogleUserInfoSwagger, handleAuthorizationCode, handleGoogleSignIn, fetchGoogleUserInfo, checkEmail, populateUser, login);

module.exports = router;