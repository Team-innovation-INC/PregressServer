/*
 /  ----  active user router
/ */
const router = require('express').Router();

// ----- controller active user paths
const userDetails = require('../../controller/user/active/userDetails.controller');
const userInfoUpdate = require('../../controller/user/info/updateInfo.controller');
const userContactUpdate = require('../../controller/user/info/updateContact.controller');
const userPasswordUpdate = require('../../controller/user/info/updatePassword.controller');

// ----- middleware active user paths
// -- global middleware for active user router
const { getUserDetails } = require('../../utility/passport.middleware');
// -- user detail and current information user
const {
  populateUser,
} = require('../../middleware/user/sign_in/populateUser.middleware');
// -- token validation type
const {
  authorizationHeaderValidator,
  userInfoInputs,
  userContactInputs,
  userPasswordInputs,
  userInformationInputs,
  checkUserNameInputs,
} = require('../../validation/validator/activeUser/activeParams');
const { userId } = require('../../middleware/user/active/activeId.middleware');
const validateInputs = require('../../validation/validator/validationInputs.config');
// -- swagger documentation
const {
  tagUserActive,
} = require('../../swagger/middleware/user/active/active_user.swagger.tag');
const {
  testSwagger,
  getDetails,
  updateContactSwagger,
  updatePasswordSwagger,
  updateProfileSwagger,
  updateProfileInformationSwagger,
  checkExistUserName,
} = require('../../swagger/middleware/user/active/active_user_description.swagger');
const userRole = require('../../controller/user/active/userole.controller');
const globalResponseController = require('../../controller/globalResponseController.controller');
const updateUserInfo = require('../../controller/user/info/updateInfo.controller');
const checkUserNameExist = require('../../controller/user/info/checkUserNameExist.controller');

router.use(
  authorizationHeaderValidator,
  validateInputs,
  getUserDetails,
  userId,
);
router.use('', tagUserActive);
/*
 /  ----  test router
/ */

router.get('/health-care', testSwagger, (req, res) => {
  res.status(200).send({message : "active user route health care work as expected", status: 200, success : true});
});

/*
 /  ----  current user information route active (get user details based on token)
/ */
router.get('/current-information', getDetails, populateUser, userDetails);

/*
 /  ----  update user information (info) for  route active
/ */
router.put(
  '/update-info',
  updateProfileSwagger,
  userInfoInputs,
  validateInputs,
  populateUser,
  userInfoUpdate,
);

/*
 /  ----  update user contact for route active
/ */
router.put(
  '/update-contact',
  updateContactSwagger,
  userContactInputs,
  validateInputs,
  userContactUpdate,
  globalResponseController
);

/*
 /  ----  update user password for route active
/ */
router.put(
  '/update-information',
  updateProfileInformationSwagger,
  userInformationInputs,
  validateInputs,
  updateUserInfo,
  userContactUpdate,
  globalResponseController
);

/*
 /  ----  update user password for route active
/ */
router.put(
  '/update-password',
  updatePasswordSwagger,
  userPasswordInputs,
  validateInputs,
  userPasswordUpdate,
  globalResponseController
);

/*
 /  ----  Checks whether a given userName exists in the system.
/ */
router.get(
  '/check/userName/:userName',
  checkExistUserName,
  checkUserNameInputs,
  validateInputs,
  checkUserNameExist,
  globalResponseController
);
/*
 /  ----  current user information route active (get user details based on token)
/ */
router.get('/role', getDetails, populateUser, userRole);

module.exports = router;
