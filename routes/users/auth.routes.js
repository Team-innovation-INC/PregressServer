const { signUpInputs } = require("../../validation/validator/auth-user/sign-upInputs");
const validateInputs = require("../../validation/validator/validationInputs");

const router = require("express").Router();

// test route auth 
router.get("/test", (req, res) => {
  res.status(200).send("test auth router page");
});

  /*
 /  ----  sign up route client checked 
/*/
//router.post("/sign-up", signUpInputs, validateInputs ,  existUser, createRole, createUserModel, createToken, activeAccount);

  // // active account checked 
  // router.get("/activate-account"   , getParams   , register      , delateToken                                                        );

  // // sign in route client checked checked 
  // router.post("/sign-in"           , signInInputs, validateInputs, login                                                              );

  // // reset password inprogress
  // router.post("/reset-password"    ,resetInputs   , validateInputs, checkUserExist, resetPassword                                      );

module.exports = router;