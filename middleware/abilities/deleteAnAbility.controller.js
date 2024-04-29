const Ability = require('../../model/ability/ability.model');

/**
 * Middleware to delete  a exist ability.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The Express `next` middleware function.
 */
exports.deleteAnAbility = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {user} = req
    const companyId = user.company._id
    /**
     * Create a new `Ability` instance with the provided data and save it to the database.
     */
    const deletedAbility = await Ability.findOneAndDelete({companyId, _id: id})

    if (!deletedAbility) {
      req.status = 400;
      req.errorMessage = "ability.exist.false"
    } else {
    /**
     * Assign the created ability to `req.data`.
     * This allows the next middleware or controller to access it.
     */
    req.data = deletedAbility;
    req.status = 200;
    }
    /**
     * Pass control to the next middleware or controller.
     */
    next();
  } catch (error) {
      req.status = 500;
    /**
     * If there's an error during the creation of the ability,
     * return a 500 status code with a descriptive error message.
     */
    next();
  }
};
