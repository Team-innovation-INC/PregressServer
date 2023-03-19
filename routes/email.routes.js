const router = require("express").Router();

// test route email
  router.get("/test", (req, res) => {
    res.status(200).send("test email router page");
  });

  // send email
  router.post("/send-email",                        sendEmail);

  module.exports = router;