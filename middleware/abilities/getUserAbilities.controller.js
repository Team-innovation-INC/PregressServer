/*
 /  ---- get all abilities list middleware
/ */

const Ability = require("../../model/ability/ability.model");

exports.getUserAbilitiesList = async (req, res, next) => {
  const {user} = req
  try {
    const abilities = await Ability.find({role: user.role.roleName});

    req.data = abilities;
    req.status = 200;
    // ----- pass to next middleware
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};
