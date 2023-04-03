const router = require("express").Router();

// test route auth 
router.get("/test", (req, res) => {
  console.log("request", req.body)
  res.status(200).send(req.body);
});

// test route auth 
router.post("/test", (req, res) => {
  console.log("request", req.body)
  res.status(200).send(req.body);
});
  /*
 /  ----  sign up route auth (send active email)
/*/

router.post("/create", (req, res) => {
  res.status(200).send("your company information is created")
})

router.post("/validate", (req, res) => {
  res.status(200).send("your company validate is created")
})

module.exports = router;