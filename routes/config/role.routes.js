/*
 /  ----  active user router
/ */
const router = require('express').Router();

// ----- controller active user paths
const userDetails = require('../../controller/user/active/userDetails.controller');

// ----- middleware active user paths
// -- global middleware for active user router
const { getUserDetails } = require('../../utility/passport.middleware');
// -- user detail and current information user
const { populateUser } = require('../../middleware/user/sign_in/populateUser.middleware');
// -- token validation type
const { authorizationHeaderValidator } = require('../../validation/validator/activeUser/activeParams');
const { userId } = require('../../middleware/user/active/activeId.middleware');
const validateInputs = require('../../validation/validator/validationInputs.config');
// -- swagger documentation
const { tagUserRolesSwagger } = require('../../swagger/middleware/user/active/active_user.swagger.tag');
const { testSwagger } = require('../../swagger/middleware/user/active/active_user_description.swagger');

router.use(
  authorizationHeaderValidator,
  validateInputs,
  getUserDetails,
  userId,
);
router.use('', tagUserRolesSwagger);
/*
 /  ----  test router
/ */

router.get('/health-care', testSwagger, (req, res) => {
  res.status(200).send({message : "role route health care work as expected", status: 200, success : true});
});


module.exports = router;
