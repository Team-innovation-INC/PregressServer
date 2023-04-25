const sendEmail = require("../../controller/mail/sendEmail.controller");
const { createEmailTemplate } = require("../../middleware/email/createEmailTemplate");
const { passwordEmail } = require("../../middleware/email/passwordEmail");
const { getUserDetails } = require("../../utility/passport.middleware");
const { validationInputs } = require("../../validation/email/validateInputs");
const { validationTo } = require("../../validation/email/validateTo");

const router = require("express").Router();

// test route email
  router.get("/test", (req, res) => {
    res.status(200).send("test email router page");
  });

  // send email
  router.post("/send-email", getUserDetails, validationInputs, validationTo, passwordEmail, createEmailTemplate,  sendEmail);

  module.exports = router;