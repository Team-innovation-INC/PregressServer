/*
 /  ---- get all abilities list middleware
/ */

const Ability = require("../../model/ability/ability.model");

exports.getAbilitiesList = async (req, res, next) => {
  try {
    const abilities = await Ability.find();

    req.data = abilities;
    req.status = 200;
    // ----- pass to next middleware
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};
