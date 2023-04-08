const router = require("express").Router();

// controllers imports 
const deactivateAccount = require("../../controller/user/auth/deactivateAccount.controller");
const userUpdate        = require("../../controller/user/info/userUpdate.controller"       );
const updateEmail       = require("../../controller/user/info/updateEmail.controller"      );
const updatePassword    = require("../../controller/user/info/updatePassword.controller"   );
const userDetails        = require("../../controller/user/auth/userDetails.controller"     );
const { getUserDetails } = require("../../utility/passport.middleware");

router.use(getUserDetails)
/**
 * @openapi
 * /test/2:
 *  get:
 *     tags:
 *     - Auth-test
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: test auth router page
 */
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