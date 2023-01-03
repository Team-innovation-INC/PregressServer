const router = require("express").Router();

const login              = require("../controller/user/auth/singIn"            )
const register           = require("../controller/user/auth/singUp"            )
const logout             = require("../controller/user/auth/logOut"            )
const desactivateAccount = require("../controller/user/auth/desactivateAccount")
const userDetails        = require("../controller/user/auth/userDetails"       )
const userUpdate         = require("../controller/user/info/userUpdate"        )
const updatePassword     = require("../controller/user/info/updatePassword"    )
const validateAccount    = require("../controller/user/check/validateAccount"  )
const domain             = require("../controller/user/check/domain"           )
const emailExist         = require("../controller/user/check/emailExist"       )


// test route client
  router.get("/test", (req, res) => {
    res.status(200).send("test client router page");
  });

  // sign up route client checked 
  router.post("/sign-up",                        register);

  // sign in route client checked
  router.post("/sign-in",                           login);

  // sign out route client checked
  router.post("/sign-out",                         logout);

  // get client details
  router.get("/current-information",          userDetails);

  // update client details
  router.put("/update-profile/",               userUpdate);

  // check client email exist 
  router.get("/check-email/:email",            emailExist);

  // check company site exist
  router.post("/check-site/:website",              domain);

  // reset password
  router.put("/update-password/",          updatePassword);

  // desactivate account 
  router.put("/desactivate-account/",  desactivateAccount);

  // request validation
  router.put("/validation-account/",      validateAccount);

  module.exports = router;