/*
 /  ----  active user router
/ */
const router = require('express').Router();

// ----- middleware active user paths
// -- global middleware for active user router
const { getUserDetails } = require('../../utility/passport.middleware');
// -- user detail and current information user
const { userId } = require('../../middleware/user/active/activeId.middleware');
const validateInputs = require('../../validation/validator/validationInputs.config');
// -- swagger documentation

const { tagUserActiveHelp } = require('../../swagger/middleware/user/help/help_user.swagger.tag');
const userHelpFieldUpdate = require('../../controller/user/help/updateHelpField.controller');
const userHelpField = require('../../controller/user/help/getHelpField.controller');

const { updateProfileHelpSwagger, testSwagger } = require('../../swagger/middleware/user/help/help_user_description.swagger');
const { authorizationHeaderValidator } = require('../../validation/validator/activeUser/activeParams');
const globalResponseController = require('../../controller/globalResponseController.controller');
const { userHelpInfoInputs, userHelpUpateInfoInputs } = require('../../validation/validator/user/help.validation');

router.use(
  authorizationHeaderValidator,
  validateInputs,
  getUserDetails,
  userId,
);
router.use('', tagUserActiveHelp);
/*x²
 /  ----  test router
/ */

router.get('/health-care', testSwagger, (req, res) => {
  res.status(200).send('test help router page');
});

/*
 /  ----  update user contact for route active
/ */
router.put(
  '/profile',
  updateProfileHelpSwagger,
  userHelpUpateInfoInputs,
  validateInputs,
  userHelpFieldUpdate,
  globalResponseController
);

router.get(
  '/profile/:fieldToUpdate',
  updateProfileHelpSwagger,
  userHelpInfoInputs,
  validateInputs,
  userHelpField,
  globalResponseController
);
module.exports = router;
