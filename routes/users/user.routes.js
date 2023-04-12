  /*
 /  ----  active user router 
/*/
const router = require("express").Router();

// ----- controller active user paths
const userDetails    = require( "../../controller/user/active/userDetails.controller"  );
const userUpdate     = require( "../../controller/user/info/userUpdate.controller"     );
const updateEmail    = require( "../../controller/user/info/updateEmail.controller"    );
const updatePassword = require( "../../controller/user/info/updatePassword.controller" );
// ----- middleware active user paths
//-- global middleware for active user router
const { getUserDetails } = require("../../utility/passport.middleware");
//-- user detail and current information user
const { populateUser } = require("../../middleware/user/sign_in/populateUser.middleware");
//-- token validation type 
const { authorizationHeaderValidator } = require("../../validation/validator/activeUser/activeParams");
const validateInputs = require("../../validation/validator/validationInputs.config");
//-- swagger documentation
const { tagUserActive } = require("../../swagger/middlewares/user/active/active_user.swagger.tag");
const { testSwagger, getDetails, updateContactSwagger, updatePasswordSwagger, updateProfileSwagger } = require("../../swagger/middlewares/user/active/active_user_description.swagger");


router.use(authorizationHeaderValidator, validateInputs, getUserDetails)
router.use('',  tagUserActive)
  /*
 /  ----  test router 
/*/

router.get( "/test",testSwagger, (req, res) => { res.status(200).send("test active router page");});

  /*
 /  ----  current user information route active (get user details based on token)
/*/
router.get("/current-information",getDetails,  populateUser, userDetails );

  /*
 /  ----  update user information (info) for  route active 
/*/
router.put("/update-profile", updateProfileSwagger, userUpdate);
  
  /*
 /  ----  update user contact for route active 
/*/
router.put("/update-contact", updateContactSwagger , updateEmail);

  /*
 /  ----  update user password for route active 
/*/
  router.put("/update-password", updatePasswordSwagger, updatePassword );


  module.exports = router;