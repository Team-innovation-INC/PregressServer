/*
 /  ---- get all abilities list by user role middleware
/ */

const Ability = require("../../model/ability/ability.model");

/**
 * Middleware to get abilities by the user's role.
 *
 * This function retrieves abilities from the database where the `roleName` matches the user's role.
 * It assigns the retrieved abilities to `req.data` and sets a 200 status if successful.
 * If there's an error, a 500 status code is returned with an appropriate error message.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The Express `next` middleware function.
 */
exports.getAbilitiesListByRole2 = async (req, res, next) => {
  const roleName = req.user.role.roleName;
  try {

    const abilities = await Ability.find({ role: { $in: [roleName] } });
    if (abilities.length === 0) {
      req.status = 204;
      req.errorMessage = "ability.role.empty"
     return  next();
    }
    req.data = abilities;
    // ----- pass to next middleware
    next();
  } catch (error) {
    req.status = 500
    next();
  }
};
