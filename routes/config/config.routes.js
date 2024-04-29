/*
 /  ----  config statement router
/ */
const router = require('express').Router();

const AbilitiesRoute = require("./ability.routes");
const RolesRoute = require("./role.routes")

/*
 ----  Ability management sub route ( sub path /abilities)
*/
router.use('/abilities', AbilitiesRoute);

/*
 ----  Rules management sub route ( sub path /roles)
*/
router.use('/roles', RolesRoute);

module.exports = router;
