/*
 /  ----  company auth router
/ */

const router = require('express').Router();

// ----- swagger auth descriptions
const { OAuth2Client } = require('google-auth-library');
const { providerTag } = require('../../swagger/provider/provider.tag');

const {
  authorizationHeaderValidator,
} = require('../../validation/validator/activeUser/activeParams');
const validateInputs = require('../../validation/validator/validationInputs.config');
const { getUserDetails } = require('../../utility/passport.middleware');
const { userId } = require('../../middleware/user/active/activeId.middleware');
/*
 /  ----  global middleware for provider auth
/ */

router.use('', providerTag);
router.use(
  authorizationHeaderValidator,
  validateInputs,
  getUserDetails,
  userId,
);

/*
 /  ----  route for google calendar router
/ */

router.post('/google/token/scope', async (req, res) => {
  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

  try {
    const client = new OAuth2Client({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    });

    await client;
    // Log the scopes associated with the token
    res.status(200).send('checks');
  } catch (error) {
    res.status(500).send('server error');
  }
});
module.exports = router;
