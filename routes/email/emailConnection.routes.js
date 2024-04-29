const router = require('express').Router();
const sendEmail = require('../../controller/mail/sendEmail.controller');
const { isAdmin } = require('../../middleware/user/role/isAdmin.middleware');
const {
  createEmailTemplate,
} = require('../../middleware/email/createEmailTemplate');
const { passwordEmail } = require('../../middleware/email/passwordEmail');
const { getUserDetails } = require('../../utility/passport.middleware');
const { validationInputs } = require('../../validation/email/validateInputs');
const { validationTo } = require('../../validation/email/validateTo');

// test route email
router.get('/health-care', (req, res) => {
  res.status(200).send('test email router page');
});

// send email
router.post(
  '/send-email',
  getUserDetails,
  validationInputs,
  validationTo,
  isAdmin,
  passwordEmail,
  createEmailTemplate,
  sendEmail,
);

module.exports = router;
