/*
 /  ----  company auth router
/ */

const router = require('express').Router();

// ----- swagger auth descriptions
const {
  providerConnectTag,
  accessBitbucketSwagger,
  accessGithubSwagger,
  accessGitlabSwagger,
  accessGoogleCalendarSwagger,
  accessGoogleGmailSwagger,
  accessGoogleMeetSwagger,
  accessJiraSwagger,
  accessMegaSwagger,
} = require('../../swagger/provider/provider.tag');
const {
  generateGoogleCalendarAuthUrl,
  generateGoogleMeetAuthUrl,
  generateGoogleGmailAuthUrl,
} = require('../../middleware/provider/google/calendarAccess.middleware');
const handleGoogleAuth = require('../../controller/user/provider/accessGoogle.controller');
const {
  accessGithub,
} = require('../../middleware/provider/github/access/access.middleware');
const {
  authorizationHeaderValidator,
} = require('../../validation/validator/activeUser/activeParams');
const validateInputs = require('../../validation/validator/validationInputs.config');
const { getUserDetails } = require('../../utility/passport.middleware');
const { userId } = require('../../middleware/user/active/activeId.middleware');

/*
 /  ----  global middleware for provider auth
/ */

router.use('', providerConnectTag);
router.use(
  authorizationHeaderValidator,
  validateInputs,
  getUserDetails,
  userId,
);

/*
 /  ----  route for google calendar router
/ */
router.get(
  '/google/meet',
  accessGoogleMeetSwagger,
  generateGoogleMeetAuthUrl,
  handleGoogleAuth,
);
router.get(
  '/google/calendar',
  accessGoogleCalendarSwagger,
  generateGoogleCalendarAuthUrl,
  handleGoogleAuth,
);
router.get(
  '/google/gmail',
  accessGoogleGmailSwagger,
  generateGoogleGmailAuthUrl,
  handleGoogleAuth,
);
router.get('/github', accessGithubSwagger, accessGithub);
router.get(
  '/gitlab',
  accessGitlabSwagger,
  generateGoogleCalendarAuthUrl,
  handleGoogleAuth,
);
router.get(
  '/bitbucket',
  accessBitbucketSwagger,
  generateGoogleCalendarAuthUrl,
  handleGoogleAuth,
);
router.get(
  '/jira',
  accessJiraSwagger,
  generateGoogleCalendarAuthUrl,
  handleGoogleAuth,
);
router.get(
  '/mega',
  accessMegaSwagger,
  generateGoogleCalendarAuthUrl,
  handleGoogleAuth,
);

module.exports = router;
