const router = require("express").Router();
const {getUserDetails} = require('../utility/passport')
const login              = require("../controller/user/auth/singIn"            )
const register           = require("../controller/user/auth/singUp"            )
const logout             = require("../controller/user/auth/logOut"            )
const desactivateAccount = require("../controller/user/auth/desactivateAccount")
const userDetails        = require("../controller/user/auth/userDetails"       )
const userUpdate         = require("../controller/user/info/userUpdate"        )
const updateEmail        = require("../controller/user/info/updateEmail");
const updatePassword     = require("../controller/user/info/updatePassword"    )
const validateAccount    = require("../controller/user/check/validateAccount"  )
const domain             = require("../controller/user/check/domain"           )
const emailExist         = require("../controller/user/check/emailExist"       );
const resetPassword = require("../controller/user/info/resetPassword");
const { createRole } = require("../middlewares/user/sign_up/CreateRole");
const { existUser } = require("../middlewares/user/sign_up/existUser");
const {createUserModel} = require('../middlewares/user/sign_up/createUserModel')
const {activeAccount} = require("../middlewares/nodeMailer/activateAccount");
const { createToken } = require("../middlewares/user/sign_up/CreateToken");
const { getParams } = require("../middlewares/user/active/getdetails");
const { delateToken } = require("../middlewares/user/active/deleteToken");

// test route client
  router.get("/test", (req, res) => {
    res.status(200).send("test client router page");
  });

  // sign up route client checked 
  router.post("/sign-up",existUser, createRole, createUserModel, createToken, activeAccount);

  // active account 
  router.get("/active", getParams, register, delateToken)

  // sign in route client checked
  router.post("/sign-in"       , login         );

  // sign out route client checked
  router.post("/sign-out"      , logout        );

  // reset password
  router.post("/reset-password", resetPassword );

  // get client details
  router.get("/current-information", getUserDetails ,  userDetails    );

  // update client details
  router.put("/update-profile"     , getUserDetails ,  userUpdate     );

  // reset email
  router.put("/update-email"       , getUserDetails ,  updateEmail    );

  // update password
  router.put("/update-password"    , getUserDetails ,  updatePassword );

  // check client email exist 
  router.get("/check-email/:email",            emailExist);

  // check company site exist
  router.post("/check-site/:website",              domain);

  // desactivate account 
  router.put("/desactivate-account/", getUserDetails,   desactivateAccount);

  // request validation
  router.put("/validation-account/",      validateAccount);

  module.exports = router;