const router = require("express").Router();

// controllers imports 
const deactivateAccount = require("../../controller/user/auth/deactivateAccount");
const userUpdate        = require("../../controller/user/info/userUpdate"       );
const updateEmail       = require("../../controller/user/info/updateEmail"      );
const updatePassword    = require("../../controller/user/info/updatePassword"   );
const userDetails        = require("../../controller/user/auth/userDetails"     );
const { getUserDetails } = require("../../utility/passport");

router.use(getUserDetails)

  // get client details checked
  router.get("/current-information", userDetails      );

  // update client details
  router.put("/update-profile"     , userUpdate       );
  
  // reset email
  router.put("/update-email"       , updateEmail      );

  // update password
  router.put("/update-password"    , updatePassword   );

  // deactivate account 
  router.put("/deactivate"         , deactivateAccount);

  module.exports = router;